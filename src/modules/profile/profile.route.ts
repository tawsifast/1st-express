import { Router } from "express";
import { profilecontroller } from "./profile.controller";


const router = Router()

router.post("/", profilecontroller.createProfile)
export const profileRoute = router