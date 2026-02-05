import { mailtrapClient, Sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = {email}
    try {
        const response = await mailtrapClient.send({
            from: Sender,
            to: [recipient],
            subject: "Verify your email",
            text: `Please verify your email using this token: ${verificationToken}`,
            category: "Email Verification",
        })

        console.log(`Verification email sent to ${email}`, response);
    } catch (error) {
        console.error(`Error sending verification`, error);
		throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = {email} 
    try {
        const response = await mailtrapClient.send({
            from: Sender,
            to: [recipient],
            subject: "Welcome to DevAOV",
            text: `Hello ${name}, welcome to DevAOV! We're glad to have you on board.`,
            category: "Welcome Email",
        })
    } catch (error) {
        console.error(`Error sending welcome email`, error);
		throw new Error(`Error sending welcome email: ${error}`);
    }
}

export const sendPasswordResetEmail = async (email, resetLink) => {
    const recipient = {email}
    try {
        const response = await mailtrapClient.send({
            from: Sender,
            to: [recipient],
            subject: "Password Reset Request",
            text: `You can reset your password using the following link: ${resetLink}`,
            category: "Password Reset",
        })
    } catch (error) {
        console.error(`Error sending password reset email`, error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = {email}
    try {
        const response = await mailtrapClient.send({
            from: Sender,
            to: [recipient],
            subject: "Password Reset Successful",
            text: `Your password has been reset successfully. If you did not perform this action, please contact support immediately.`,
            category: "Password Reset",
        })
    } catch (error) {
        console.error(`Error sending password reset success email`, error);
        throw new Error(`Error sending password reset success email: ${error}`);
    }
}