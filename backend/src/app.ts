import express from "express";
import authRoutes from "./routes/auth.route";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

export default app;
