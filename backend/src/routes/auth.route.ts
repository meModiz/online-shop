import { Router } from "express";
import { RegisterUser } from "../controllers/auth/register.controller";
import { LoginUser } from "../controllers/auth/login.controller";

const router = Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);

export default router;
