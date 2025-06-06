import prisma from "../../prisma";
import { ApiError, RegisterInputT } from "../../typings/types";
import { HTTP } from "../../utils/statusCodes";
import { registerSchema } from "./register.schema";

export default async function RegistrationValidation({
  email,
  password,
}: RegisterInputT): Promise<{ valid: boolean; error?: ApiError }> {
  const zValidation = registerSchema.safeParse({
    email: email,
    password: password,
  });

  if (!zValidation.success) {
    const message = zValidation.error.issues.map((issue) => issue.message).join("\n");

    return {
      valid: false,
      error: { code: HTTP.BAD_REQUEST, errorMessage: message },
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return {
      valid: false,
      error: { code: HTTP.BAD_REQUEST, errorMessage: "User already exists" },
    };
  }

  return { valid: true };
}
