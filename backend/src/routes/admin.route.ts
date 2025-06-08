import { Router } from "express";
import { getUsers, updateUserRole } from "../controllers/admin/user.controller";

const router = Router();
router.get("/users", getUsers);
router.patch("/user/:id/role", updateUserRole);

export default router;
