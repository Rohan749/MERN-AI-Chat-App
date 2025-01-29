import User from "../modals/user.modal.js";
import jwt from "jsonwebtoken"

const jwtSecretKey = "myjwtsecretphrase"

export const authMiddleware = async (req, res, next) => {
    try {

        const token = req.cookies.jwt;

        if(!token) {
            res.status(400).json({message: "Unauthorized: No token present!"});
        }

        const decoded = jwt.verify(token, jwtSecretKey);

        if(!decoded)  {
            res.status(400).json({message: "Unauthorized: Invalid Token!"});
        }

        
        const user = await User.findById(decoded.userId).select("-password") ;
        
        if(!user) {
            res.status(400).json({message: "User not found!"});
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in the Authentication middleware:", error);
    return res.status(400).json({ message: "Internal Server Error" });
    }
}