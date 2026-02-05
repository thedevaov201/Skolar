import bcryptjs from "bcryptjs"

import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendResetSuccessEmail } from "../mailtrap/emails.js";

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            throw new Error("All fields are required")
        }

        // Check if user exist already
        const userExists = await User.findOne({ email });
        if(userExists) return res.status(400).json({ message: "User already exist"})

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // Expires in 24hrs
        })

        await user.save();

        generateTokenAndSetCookie(res, user._id)
        sendVerificationEmail(user.email, verificationToken)

        res.status(201).json({
            success: true,
            message: "User crreated successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.log("Error signing up", error)
        res.status(500).json({message: "Internal server error"})
    }
}
export const logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password) {
            throw new Error("All fields required")
        } 

        const user = await User.findOne({email})
        if(!user) return res.status(400).json({message: "User not found"})

        const isPassword = await bcryptjs.compare(password, user.password)
        if(!isPassword) return res.status(400).json({message: "Invalid credentials"})

        user.lastLogin = Date.now();

        await user.save();

        generateTokenAndSetCookie(res, user._id)

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.log("Error logging in", error)
        res.status(500).json({message: "Internal server error"})
    }
}
export const logOut = async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({message: "User logged out successfully"})
}
export const verifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() },
        })

        if(!user) return res.status(400).json({message: "Invalid verification code"})

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
		await user.save();

		await sendWelcomeEmail(user.email, user.name);

        res.status(200).json({message: "Email verified successfully"})

    } catch (error) {
        console.log("Error verifying email", error)
        res.status(500).json({message: "Internal server error"})
    }
}
export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({message: "User not found"})

        const resetToken = Math.floor(100000 + Math.random() * 900000).toString()
        user.resetPasswordToken = resetToken;
        user.resetPasswordTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000 // Expires in 24hrs

        await user.save();

        await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`)

        res.status(200).json({message: "Password reset email sent successfully"})
    } catch (error) {
        console.log("Error sending password reset email", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    try {
        const user = await User.findOne({
			resetPasswordToken: token,
			resetPasswordExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
		}

		// update password
		const hashedPassword = await bcryptjs.hash(newPassword, 10);

		user.password = hashedPassword;
		user.resetPasswordToken = undefined;
		user.resetPasswordTokenExpiresAt = undefined;
		await user.save();

		await sendResetSuccessEmail(user.email);

		res.status(200).json({ success: true, message: "Password reset successful" });
    } catch (error) {
        console.log("Error resetting password", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password")
        if(!user) return res.status(400).json({message: "User not found"})

        res.status(200).json({
            success: true,
            user
        })
    } catch(error) {
        console.log("Error checking auth", error)
        res.status(500).json({message: "Internal server error"})
    }
}