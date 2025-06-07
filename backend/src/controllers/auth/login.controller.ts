import { Request, Response } from "express";

export async function LoginUser(req: Request, res: Response) {
  const { email, password } = req.body;
}
