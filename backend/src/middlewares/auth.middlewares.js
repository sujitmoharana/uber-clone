import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { ApiError } from "../utils/Apierror.js";
import { blacklistToken } from "../models/blacklistToken.model.js";
import { captainModel } from "../models/captain.model.js";

export const authuser = async(req,res,next)=>{
    const token = req.cookies.token || req.header("Authorization")?.replace(/bearer\s+/i, "");
    console.log("incomming token",token);
    
    if (!token) {
        return res.status(401).json({message:"unauthorized"})
    }

    const isblacklisted = await blacklistToken.findOne({token})
    console.log("isblacklisted",isblacklisted);
    
    if (isblacklisted) {
        console.log("hello i am blacklisted");
        throw new ApiError(400,"isblacklisted token")
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
        const user = await UserModel.findById(decoded._id)
        console.log(user);
        req.user = user;
       return next()
    } catch (error) {
        return res.status(401).json(
            new ApiError(401,"unauthorized")
        )
    }
}

export const authcaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.header("Authorization")?.replace(/bearer\s+/i, "");
    console.log("incomming token",token);
    
    if (!token) {
        return res.status(401).json({message:"unauthorized"})
    }

    const isblacklisted = await blacklistToken.findOne({token})
    console.log("isblacklisted",isblacklisted);
    
    if (isblacklisted) {
       return  res.status(400).json({message:"Unauthoraized"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
        const captain = await captainModel.findById(decoded._id)
        console.log(captain);
        req.captain = captain;
       return next()
    } catch (error) {
        return res.status(401).json(
            new ApiError(401,"unauthorized")
        )
    }
}
