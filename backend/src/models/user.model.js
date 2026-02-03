import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        school: String,
        department: String,
        level: String,
        avatar: String,
        role: { type: String, default: "student"},
        lastLogin: Date,
        isVerified: { type: Boolean, default: false},
        verificationToken: String,
        verificationTokenExpiresAt: Date,
        resetPasswordToken: String,
        resetPasswordTokenExpiresAt: Date
    },

    { timestamps: true}
)

const User = mongoose.model("User", userSchema)
export default User