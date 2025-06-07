import { Router } from "express";
import GetUsers from "../controllers/admin/getUsers.controller";

const router = Router();
router.get("/getUsers", GetUsers);

export default router;
