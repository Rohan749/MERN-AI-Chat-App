import express from "express";
import { getMessages, sendMessages } from "../controllers/message.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const messageRoutes = express.Router();

messageRoutes.get("/getMessages/:id", authMiddleware, getMessages)
messageRoutes.post("/sendMessage/:id", authMiddleware, sendMessages)

export default messageRoutes;
