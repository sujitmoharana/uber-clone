import { UserModel } from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { ApiError } from "../utils/Apierror.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { asynchandler } from "../utils/asynchandler.js";
import {validationResult} from "express-validator"
export const registerUser = asynchandler(async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname,email,password} = req.body
    console.log(fullname,email,password);
    
    const hashPassword = await UserModel.hashPassword(password);
    console.log(hashPassword);
    

    const user = await createUser({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hashPassword})
    console.log("user",user);
    
    const token = user.generateAuthToken();
  console.log("token",token);
  
    res.status(200).json(
        new Apiresponse(200,{token,user},"register sucessfully")
    )
})

