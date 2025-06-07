import prisma from "../../../prisma";
import { ApiError, AuthInputT } from "../../../typings/types";
import { HTTP } from "../../../utils/statusCodes";
import { authSchema } from "./auth.schema";
import ValidateInput from "./input.validation";

export default async function RegistrationValidation({
  email,
  password,
}: AuthInputT): Promise<{ valid: boolean; error?: ApiError }> {
  const inputValid = await ValidateInput({ email, password });

  if (!inputValid.valid) {
    return {
      valid: inputValid.valid,
      error: {
        code: inputValid.error?.code ?? HTTP.BAD_REQUEST,
        errorMessage: inputValid.error?.errorMessage ?? "Failed validation.",
      },
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
