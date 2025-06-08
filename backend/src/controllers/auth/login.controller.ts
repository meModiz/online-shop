import { Request, Response } from "express";
import prisma from "../../prisma";
import { HTTP } from "../../utils/statusCodes";
import authInputValidation from "../../validators/auth/auth.validation";
import { authenticateUser } from "../../services/auth.services";

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  const validation = await authInputValidation(email, password);

  if (!validation.valid) {
    res.status(validation.error?.code ?? HTTP.BAD_REQUEST).json({
      message: validation.error?.message ?? "Failed validation.",
    });
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!existingUser) {
      res.status(HTTP.NOT_FOUND).json({ message: "Wrong credentials. (user do not exist)" });
      return;
    }

    const authentication = await authenticateUser(password, {
      id: existingUser.id,
      email: existingUser.email,
      password: existingUser.password,
      role: existingUser.role,
    });

    if (authentication.logged) {
      res.status(HTTP.OK).json({ message: "Succesfully logged in.", token: authentication.token });
      return;
    }

    res
      .status(authentication.error?.code ?? HTTP.BAD_REQUEST)
      .json({ message: authentication.error?.message ?? "Unsuccesful authentication" });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database is not responding." });
    return;
  }
}
