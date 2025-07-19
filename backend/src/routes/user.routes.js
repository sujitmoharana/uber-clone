import { Router } from "express";
import {body} from "express-validator"
import { loginuser, registerUser } from "../controllers/user.controller.js";
export const router = Router(); 

router.post("/register",[
    body('email').isEmail().withMessage("invalid email"),
    body("fullname.firstname").isLength({min:3}).withMessage("firstname must be at least 33 character long"),
    body('password').isLength({min:6}).withMessage("password must be 6 character")
],registerUser)

router.post("/login",[
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({min:6}).withMessage("password must be 6 character")

],loginuser)