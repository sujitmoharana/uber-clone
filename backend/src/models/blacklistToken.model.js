import mongoose, { now } from "mongoose";

const blacklistTokenSchema = new mongoose.Schema({
  token:{
    type:String,
    required:true,
    unique:true
  },
  createdAt:{
    type:Date,
    default:Date.now,
    expires:86400 //24 hours in second
  }  
})

export const blacklistToken = mongoose.model("blacklistToken",blacklistTokenSchema);