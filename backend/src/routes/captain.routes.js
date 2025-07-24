import { Router } from "express";
import {body} from "express-validator"
import { getcaptainProfile, logincaptain, logoutCaptain, registercaptain } from "../controllers/captain.controller.js";
import { authcaptain } from "../middlewares/auth.middlewares.js";
export const router = Router(); 

router.post('/register',[
    body('email').isEmail().withMessage("captain invalid mail"),
    body('fullname.firstname').isLength({min:3}).withMessage("captain firstname must be atleast 3 character as long"),
    body('password').isLength({min:6}).withMessage("captain password must be atleast 6 character as long"),
    body('vechile.color').isLength({min:3}).withMessage("captain veichle color must be atleast 3 character as long"),
    body('vechile.plate').isLength({min:3}).withMessage("captain vechicle plate must be atleast 3 character as long"),
    body('vechile.capacity').isLength({min:1}).withMessage("captain veichle capacity must be atleast 1 character as long"),
    body('vechile.vechileType').isIn(['car','motorcycle','auto']).withMessage("captain invalid vechile"),
    
],registercaptain)

router.post("/login",[
    body('email').isEmail().withMessage("captain invalid mail"),
    body('password').isLength({min:6}).withMessage("captain firstname must be atleast 6 character as long"),

],logincaptain)

router.get("/profile",authcaptain,getcaptainProfile)
router.get("/logout",authcaptain,logoutCaptain)

