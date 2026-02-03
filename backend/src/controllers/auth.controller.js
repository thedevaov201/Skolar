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
    res.send("login router")
}
export const logOut = async (req, res) => {
    res.send("logout router")
}
export const verifyEmail = async (req, res) => {
    res.send("verifyEmail router")
}
export const forgotPassword = async (req, res) => {
    res.send("forgotPassword router")
}