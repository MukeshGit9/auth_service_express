import { Router } from "express";
import {signup, verifyEmail} from '../controller/signup.controller'

const router = Router();

router.post("/api/v1/auth/signup", signup)
router.get("/api/v1/auth/verify-email", verifyEmail)

export default router;