import express from "express";
import { login, signup } from "../controllers/auth.controllers.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)

//Add logout

export default authRoutes;