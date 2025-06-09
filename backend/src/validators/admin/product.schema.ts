import { z } from "zod/v4";

export const productCreateSchema = z.strictObject({
  name: z.string(),
  description: z.string(),
  price: z.number().min(0),
});
