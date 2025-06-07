import prisma from "../../prisma";
import { Request, Response } from "express";
import { HTTP } from "../../utils/statusCodes";

export default async function GetUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    res.status(HTTP.OK).json({ users: users });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database is not responding." });
    return;
  }
}
