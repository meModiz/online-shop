import { Response } from "express";
import { UserRequest } from "../../typings/types";
import { HTTP } from "../../utils/statusCodes";
export async function verifyUser(req: UserRequest, res: Response) {
  if (req.user.data) {
    res.status(HTTP.OK).json({ user: req.user.data });
    return;
  }

  res.status(HTTP.UNAUTHORIZED).json({ messsage: "User is not authorized." });
  return;
}
