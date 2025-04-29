import { Router } from "express";
import { forgotPassword, resetPassword } from "../controller/forgotPassword.controller";

const router = Router();

router.post('/api/v1/auth/forgot-password', forgotPassword)
router.post('/api/v1/auth/reset-password', resetPassword)

export default router