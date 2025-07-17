import  mongoose from "mongoose";
import { DB_NAME } from "./content.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from 'dotenv';

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("mongo db connection failed",error);
})
   
