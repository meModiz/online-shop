import prisma from "../../prisma";
import { Request, Response } from "express";
import { HTTP } from "../../utils/statusCodes";

export default async function GetUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany();
  res.status(HTTP.OK).json({ users: users });
}
