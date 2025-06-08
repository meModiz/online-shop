import { ApiError_T } from "../../typings/types";
import { HTTP } from "../../utils/statusCodes";
import { authSchema } from "./auth.schema";

export default async function authInputValidation(
  email: string,
  password: string
): Promise<{ valid: boolean; error?: ApiError_T }> {
  const zValidation = authSchema.safeParse({
    email: email,
    password: password,
  });

  if (!zValidation.success) {
    const message = zValidation.error.issues.map((issue) => issue.message).join("\n");

    return {
      valid: false,
      error: { code: HTTP.BAD_REQUEST, message: message },
    };
  }

  return { valid: true };
}
