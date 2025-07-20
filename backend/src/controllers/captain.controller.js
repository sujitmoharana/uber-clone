import { captainModel } from "../models/captain.model.js";

import { createcaptain } from "../services/captain.service.js";
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
  
  res.status(200).json(
    new Apiresponse(200,{captain,token},"register sucessfully")
  )
})