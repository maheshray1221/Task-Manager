import { Router } from "express"
import {
    registerUser,
    loginUser,
    checkAuth
} from "../controllers/user.Controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"

const router = Router()

router.route("/registerUser").post(registerUser)

router.route("/loginUser").post(loginUser)

router.route("/checkAuth").get(verifyJWT, checkAuth)

export default router