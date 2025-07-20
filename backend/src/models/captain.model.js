import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const captainSchema = new mongoose.Schema({
   fullname:{
    firstname:{
        type:String,
        required:true,
        minlength:[3,'firstname must be at least 3 character as long']
    },
    lastname:{
        type:String,
        minlength:[3,"lastname must be atleast 3 character as long"]
    }
   },
   email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
   },
   password:{
    type:String,
    required:true,
    select:false
   },
  socketId:{
    type:String
  },
  status:{
    type:String,
    enum:['active','inactive'],
    default:'inactive'
  },
  vechile:{
    color:{
        type:String,
        required:true,
        minlength:[3,'color must be at least 3 character as long']
    },
    plate:{
        type:String,
        required:true,
        minlength:[3,'plate must be at least 3 character as long']
    },
    capacity:{
        type:Number,
        required:true,
        minlength:[1,"capacity must be atleast 1"]
    },
     vechileType:{
        type:String,
        required:true,
        enum:['car','motorcycle','auto']      
     }  
  },
  location:{
    lat:{ //lattitude
        type:Number 
    },
    lng:{//langitude
        type:Number
    }
  }
})

captainSchema.methods.generateAuthtoken = function(){
    return jwt.sign({
        _id:this._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn:process.env.TOKEN_EXPIRY
    }
) 
}

captainSchema.statics.hashPassword = async function (password) { // https://chatgpt.com/s/t_6879e109192c8191998f5f2f32d98f82 for understood
    return await bcrypt.hash(password,10);
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
  }

  export const captainModel  = mongoose.model("captain",captainSchema)