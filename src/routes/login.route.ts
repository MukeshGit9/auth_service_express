import { loginUser } from "../controller/login.controller";
import { Router } from "express";

const router = Router();

router.post("/api/v1/auth/login", loginUser);

export default router;