import { blacklistToken } from "../models/blacklistToken.model.js";
import { captainModel } from "../models/captain.model.js";

import { createcaptain } from "../services/captain.service.js";
import { ApiError } from "../utils/Apierror.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { asynchandler } from "../utils/asynchandler.js";
import { validationResult } from "express-validator";
export const registercaptain = asynchandler(async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }

  const {fullname,email,password,vechile} = req.body;
  console.log(fullname,email,password,vechile);
  
 const iscaptainAlreadyExists = await captainModel.findOne({email})
 console.log(iscaptainAlreadyExists);
 if (iscaptainAlreadyExists) {
    return res.status(400).json({message:'captain alreadty exists'})
 }

  const hashPassword = await captainModel.hashPassword(password)
  console.log(hashPassword);

  const captain = await createcaptain({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hashPassword,color:vechile.color,plate:vechile.plate,capacity:vechile.capacity,vechileType:vechile.vechileType});
  console.log(captain);
  const token = captain.generateAuthtoken();
  console.log(token);
  
  return res.status(200).json(
    new Apiresponse(200,{captain,token},"register sucessfully")
  )
})

export const logincaptain = asynchandler(async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }

    const {email,password} = req.body
    const captain = await captainModel.findOne({email}).select('+password');
    if (!captain) {
        throw new ApiError(400,"invalid user and password");
    }
    const ismatch = await captain.comparePassword(password)
    if (!ismatch) {
        throw new ApiError(400,"invalid email or password")
    }

    const token = captain.generateAuthtoken();
   return res.status(200).cookie('token',token).json(
        new Apiresponse(200,{token,captain},"login sucessfully")
    )
})

export const getcaptainProfile = asynchandler(async(req,res,next)=>{
  return res.status(200).json(
        new Apiresponse(200,{user:req.captain},"get profile successfully")
    )
})

export const logoutCaptain = asynchandler(async(req,res,next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || req.header("Authorization")?.replace("bearer ","");
    await blacklistToken.create({
        token
    })
   return res.status(200).json(
        new Apiresponse(200,{},"logout sucessfully")
    )
})