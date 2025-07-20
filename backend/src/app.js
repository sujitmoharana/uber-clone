import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
export const app = express();

app.use(cors({
    origin:process.env.CORS,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true,limit:"16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())

//routes import
import { router as userRouter } from "./routes/user.routes.js";
app.use("/users", userRouter);


//for captain
import { router as captainRouter } from "./routes/captain.routes.js";
app.use("/captain", captainRouter);
//route declaration
