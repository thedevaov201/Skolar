import bcryptjs from "bcryptjs"

import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
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
            verificationToken: Date.now() + 24 * 60 * 60 * 1000 // Expires in 24hrs
        })

        await user.save();

        generateTokenAndSetCookie(res, user._id)

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
    res.send("verifyEmail router")
}
export const forgotPassword = async (req, res) => {
    res.send("forgotPassword router")
}