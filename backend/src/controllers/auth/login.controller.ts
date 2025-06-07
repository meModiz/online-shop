import { Request, Response } from "express";
import prisma from "../../prisma";
import { HTTP } from "../../utils/statusCodes";
import AuthInputValidation from "../../middlewares/validators/auth/auth.validation";
import { compareHashedPasswords } from "../../services/auth.services";

export async function LoginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  const validation = await AuthInputValidation({
    email: email,
    password: password,
  });

  if (!validation.valid) {
    res.status(validation.error?.code ?? HTTP.BAD_REQUEST).json({
      message: validation.error?.errorMessage ?? "Failed validation.",
    });
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!existingUser) {
      res.status(HTTP.NOT_FOUND).json({ message: "User do not exist with that email." });
      return;
    }

    const isPasswordMatches = await compareHashedPasswords(password, existingUser.password);

    if (isPasswordMatches === null) {
      res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Can't compare password. Bcrypt problem." });
      return;
    } else if (isPasswordMatches === false) {
      res.status(HTTP.BAD_REQUEST).json({ message: "Wrong password." });
      return;
    }

    res.status(HTTP.OK).json({ message: "Succesfully logged in." });
    return;
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database is not responding." });
    return;
  }
}
