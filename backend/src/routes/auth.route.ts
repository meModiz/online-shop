import { Router } from "express";
import { limiter } from "../utils/api.limiter";
import { RegisterUser } from "../controllers/auth/register.controller";
import { LoginUser } from "../controllers/auth/login.controller";

const router = Router();

router.post("/register", limiter, RegisterUser);
router.post("/login", limiter, LoginUser);

export default router;
