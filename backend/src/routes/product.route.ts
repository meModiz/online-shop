import { Router } from "express";
import { createProduct, editProduct } from "../controllers/admin/product.controller";
import { getProducts } from "../controllers/user/product.controller";
import { checkAuth, isAdmin } from "../middlewares/auth.middleware";
const router = Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);

router.post("/create", checkAuth, isAdmin, createProduct);
router.patch("/edit/:id", checkAuth, isAdmin, editProduct);

router.get("/:page", getProducts);

export default router;
