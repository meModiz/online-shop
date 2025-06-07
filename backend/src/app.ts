import express from "express";
import authRoutes from "./routes/auth.route";
import adminRoutes from "./routes/admin.route";
import { limiter } from "./utils/api.limiter";
import { checkAuth, isAdmin } from "./middlewares/auth.middleware";

const app = express();

app.use(express.json());
app.use("/auth", limiter, authRoutes);

app.use("/admin", limiter, checkAuth, isAdmin, adminRoutes);

export default app;
