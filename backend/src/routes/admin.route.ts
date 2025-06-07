import { Router } from "express";
import GetUsers from "../controllers/admin/getUsers.controller";
import SetRole from "../controllers/admin/setRole.controller";

const router = Router();
router.get("/getUsers", GetUsers);
router.post("/setRole", SetRole);

export default router;
