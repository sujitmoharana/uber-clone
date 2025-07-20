import { captainModel } from "../models/captain.model.js";
import { ApiError } from "../utils/Apierror.js";

export const createcaptain =  async({firstname,lastname,email,password,color,plate,capacity,vechileType})=>{
console.log(firstname,lastname,email,password,color,plate,capacity,vechileType);

if (!firstname || !email || !password || !lastname|| !plate || !color || !capacity || !vechileType) {
    throw new ApiError(400,"all field are required")
}


 const captain = captainModel.create({
    fullname:{
        firstname,
        lastname,
    },
    email,
    password,
    vechile:{
        color,
        plate,
        capacity,
        vechileType
    }
})
console.log(captain);
return captain
}