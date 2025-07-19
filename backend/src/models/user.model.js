import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first message must be at least 3 character long']
        },
        lastname:
        {
            type:String,
            minlength:[3,'first message must be at least 3 character long']
        }
    },

    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,"email must be at least 3 character"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    }
})
userSchema.statics.hashPassword = async function (password) { // https://chatgpt.com/s/t_6879e109192c8191998f5f2f32d98f82 for understood
    return await bcrypt.hash(password,10);
}
  userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
  }

  userSchema.methods.generateAuthToken = function(){
     return jwt.sign({
          _id:this._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn:process.env.TOKEN_EXPIRY
      }
  )
  }

  export const UserModel = mongoose.model("user",userSchema)