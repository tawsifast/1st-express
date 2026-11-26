import { Router } from "express";
import { authController } from "./auth.controller";


const router = Router()

router.post("/api/v1/login", authController.loginUser)

export const authRoute = router