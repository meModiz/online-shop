import { ApiError } from "../../typings/types";
import { HTTP } from "../../utils/statusCodes";
import { userSchema } from "./user.schema";

export default async function UserInfoInputValidation(email: string): Promise<{ valid: boolean; error?: ApiError }> {
  const zValidation = userSchema.safeParse({
    email: email,
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
