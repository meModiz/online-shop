import { Request, Response, NextFunction } from "express";
import { HTTP } from "../utils/statusCodes";
import { getUserByJWT } from "../services/jwt.services";
import { getJwtTokenFromHeader } from "../utils/parser";

export async function checkAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = getJwtTokenFromHeader(authHeader as string);
  if (token === null) {
    res.status(HTTP.UNAUTHORIZED).json({ message: "Missing or invalid token." });
    return;
  }

  try {
    const user = await getUserByJWT(token);
    if (user) {
      console.log(user);
      next();
      return;
    }
    res.status(HTTP.UNAUTHORIZED).json({ message: "Invalid token." });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Server problem" });
  }
}

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = getJwtTokenFromHeader(authHeader as string);
  if (token === null) {
    res.status(HTTP.UNAUTHORIZED).json({ message: "Missing or invalid token." });
    return;
  }
  try {
    const user = await getUserByJWT(token);
    if (user && user.data.role === "ADMIN") {
      next();
      return;
    }
    res.status(HTTP.UNAUTHORIZED).json({ message: "User is not an admin" });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Server problem" });
  }
}
