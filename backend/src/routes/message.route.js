import express from "express"
import { getUserForSideBar, getMessages, sendMessage } from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const Router = express.Router()

Router.get("/users", protectRoute, getUserForSideBar)
Router.get("/:id", protectRoute, getMessages)
Router.post("/send/:id", protectRoute, sendMessage)


export default Router