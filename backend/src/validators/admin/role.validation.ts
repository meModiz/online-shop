import { ApiError_T } from "../../typings/types";
import { HTTP } from "../../utils/statusCodes";
import { roleSchema } from "./role.schema";

export default async function roleValidation(role: string): Promise<{ valid: boolean; error?: ApiError_T }> {
  const zValidation = roleSchema.safeParse(role);

  if (!zValidation.success) {
    const message = zValidation.error.issues.map((issue) => issue.message).join("\n");

    return {
      valid: false,
      error: { code: HTTP.BAD_REQUEST, message: message },
    };
  }

  return { valid: true };
}
