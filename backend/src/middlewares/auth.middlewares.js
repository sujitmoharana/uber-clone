import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { ApiError } from "../utils/Apierror.js";

export const authuser = async(req,res,next)=>{
    const token = req.cookies.token || req.header("Authorization")?.replace("bearer ","");
    console.log("incomming token",token);
    
    if (!token) {
        return res.status(401).json({message:"unauthorized"})
    }

    const isblacklisted = await UserModel.findOne({token})
    console.log("isblacklisted",isblacklisted);
    
    if (isblacklisted) {
       return  res.status(400).json({message:"Unauthoraized"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
        const user = await UserModel.findById(decoded._id)
        req.user = user;
        next()
    } catch (error) {
        return res.status(401).json(
            new ApiError(401,"unauthorized")
        )
    }
}