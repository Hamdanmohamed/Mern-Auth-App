import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs"


export const addSignupUser = async(req,res) => {

    const {username,email,password} = req.body;
    const alReadyUser =await User.findOne({email})

    if(alReadyUser){
        return res.status(400).json({message:"already user is registered"})
    }

    const salt = 12;
    const hashedPassword = bcryptjs.hashSync(password,salt);

    const newUser = new User({
        username,
        email,
        password:hashedPassword
    })
    
    try {
        await newUser.save();
        res.status(200).json({message:"user created successfully"})
    } catch (error) {
        res.status(500).json({message:"something went wrong in the internal server"})
    }
}