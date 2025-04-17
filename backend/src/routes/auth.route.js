import express from "express"
import {   
    signup, 
    login, 
    logout, 
    updateProfile, 
    checkAuth 
} from "../controllers/auth.controllers.js"
import { protectRoute } from "../middleware/auth.middleware.js"
const Router = express.Router()

Router.post("/signup", signup)

Router.post("/login", login)

Router.post("/logout",logout)

Router.put("/update_profile", protectRoute, updateProfile)

Router.get("/check", protectRoute, checkAuth)

export default Router