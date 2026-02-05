import { Router } from "express"

import { verifyToken } from "../middleware/verifyToken.js"
import { checkAuth, signUp, logIn, logOut, verifyEmail, forgotPassword, resetPassword } from "../controllers/auth.controller.js"

const router = Router()

router.get("/check-auth", verifyToken, checkAuth)
router.post("/signup", signUp)
router.post("/login", logIn)
router.post("/logout", logOut)
router.post("/verify-email", verifyEmail)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)


export default router