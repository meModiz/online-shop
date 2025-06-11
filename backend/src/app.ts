import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route";
import adminRoutes from "./routes/admin.route";
import productRoutes from "./routes/product.route";
import { limiter } from "./utils/api.limiter";
import { checkAuth, isAdmin } from "./middlewares/auth.middleware";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use("/auth", limiter, authRoutes);

app.use("/admin", limiter, checkAuth, isAdmin, adminRoutes);

app.use("/products", limiter, productRoutes);

export default app;
