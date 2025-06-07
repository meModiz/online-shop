import prisma from "../../prisma";
import { Request, Response } from "express";
import { HTTP } from "../../utils/statusCodes";
import { getUserByJWT } from "../../services/jwt.services";

export default async function GetUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany();
  const authenticated = await getUserByJWT(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpasdasdXVCJ9.eyJleHAiOjE3NDkzMzE5MTYsImRhdGEiOnsidXNlcklkIjoxLCJ1c2VyRW1haWwiOiJtb2Rpc0BkYXVuYXMuY29tIn0sImlhdCI6MTc0OTMyODMxNn0.1YOT4V5E-SX_ZSEC70n4IJEsATMn8carq0KtZsb4eTI"
  );
  res.status(HTTP.OK).json({ users: users });
}
