import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import connectDB from "./config/db.js";
import authRoute from "./routes/auth.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({origin: "http://localhost:5000", credentials: true}))

app.use("/api/auth", authRoute)

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})