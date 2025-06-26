import { Response } from "express";
import { UserRequest } from "../../typings/types";
import { HTTP } from "../../utils/statusCodes";
export async function logoutUser(req: UserRequest, res: Response) {
  res.clearCookie("auth_jwt_token", {
    httpOnly: true,
    secure: false,
    sameSite: false,
  });

  res.status(HTTP.OK).json({ message: "logged out" });
}
