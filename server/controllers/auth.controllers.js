import User from "../modals/user.modal.js";
import bcrypt from "bcryptjs"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signup = async (req, res) => {
    const {fullname, username, email, password} = req.body;

    try {
        if(!fullname || !username || !email || !password) {
            return res.status(400).json({message: "Please enter all the credentials properly."})
        }

        if(password.length < 5) {
            return res.status(400).json({message: "Password length must be greater then 5 characters."})
        }

        const emailValid = emailRegex.test(email);

        if(!emailValid) {
            return res.status(400).json({message: "Email is not valid."});
        }

        const user = await User.findOne({email});

        if(user) {
            return res.status(400).json({message: "User with this email already exists!"});
        }

        //Create a user avatar: https://robohash.org/maya
        // Add it in modal

        //Generate token

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            fullname,
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(200).json({
            fullname,
            username,
            email
        })

        
    } catch (error) {
        console.log("Error in the signup controller:", error)
        return res.status(400).json({message: "Internal Server Error"});
    }
} 

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const emailValid = emailRegex.test(email);

        if(!emailValid) {
            return res.status(400).json({message: "Email is not valid."});
        }

        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({message: "Unauthorized! No user with this email available!"});
        }

        const hashedPassword = user.password;

        const comparision = await bcrypt.compare(password, hashedPassword)

        if(!comparision) {
            return res.status(400).json({message: "Invalid password. Please enter the correct password."});
        }

        else {
            return res.status(200).json({
                email: user.email,
                username: user.username,
                fullname: user.fullname
            })
        }       
    } catch (error) {
        console.log("Error in the signup controller:", error)
        return res.status(400).json({message: "Internal Server Error"});        
    }
}