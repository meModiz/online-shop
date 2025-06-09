import { ApiError_T, Product_T } from "../../typings/types";
import { HTTP } from "../../utils/statusCodes";
import { productCreateSchema } from "./product.schema";

export async function productCreateValidation({
  name,
  description,
  price,
}: Product_T): Promise<{ valid: boolean; error?: ApiError_T }> {
  const zValidation = productCreateSchema.safeParse({ name, description, price });

  if (!zValidation.success) {
    const message = zValidation.error.issues.map((issue) => issue.message).join("\n");

    return {
      valid: false,
      error: { code: HTTP.BAD_REQUEST, message: message },
    };
  }

  return { valid: true };
}
