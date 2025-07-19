import { UserModel } from "../models/user.model.js";
import { ApiError } from "../utils/Apierror.js";

export const createUser = async({firstname,lastname,email,password})=>{
console.log("createuse all names",firstname,lastname,email,password);

    if (!firstname || !email || !password) {
        throw new ApiError(400,"all field are required")
    }

    const user = UserModel.create({
        fullname:{
            firstname:firstname,
            lastname:lastname
        },
        email:email,
        password:password
    })
    console.log(user);
    return user
    
    }