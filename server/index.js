import express from "express"
import routesAuth from "./routes/auth.routes.js"
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";

configDotenv()

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", routesAuth)
app.use("/api/messages", messageRoutes)


mongoose.connect(
    process.env.MONGODB_URI
).then(() => {
    console.log("Database connection established!");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    }) 
})