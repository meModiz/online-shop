import prisma from "../../prisma";
import { ApiError, AuthInputT } from "../../typings/types";
import { HTTP } from "../../utils/statusCodes";
import { authSchema } from "./auth.schema";

export default async function AuthInputValidation({
  email,
  password,
}: AuthInputT): Promise<{ valid: boolean; error?: ApiError }> {
  const zValidation = authSchema.safeParse({
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

  return { valid: true };
}
