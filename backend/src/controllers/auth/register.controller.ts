import { Request, Response } from "express";
import prisma from "../../prisma";
import { HTTP } from "../../utils/statusCodes";
import AuthInputValidation from "../../validators/auth/auth.validation";
import { hashPassword } from "../../services/hash.services";

export async function RegisterUser(req: Request, res: Response) {
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

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    res.status(HTTP.CONFLICT).json({ message: "User already exists" });
    return;
  }

  const hash = await hashPassword(password);
  if (!hash) {
    res.status(500).json({ message: "Encryption failed" });
    return;
  }

  try {
    await prisma.user.create({
      data: {
        email: email,
        password: hash,
      },
    });

    res.status(HTTP.CREATED).json({ message: "Account was created successfully." });
    return;
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database error." });
    return;
  }
}
