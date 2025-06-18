import { Router } from "express";
import { registerUser } from "../controllers/auth/register.controller";
import { loginUser } from "../controllers/auth/login.controller";
import { verifyUser } from "../controllers/auth/verify.controller";
import { checkAuth } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", checkAuth, verifyUser);

export default router;
