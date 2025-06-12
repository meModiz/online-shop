import { z } from "zod/v4";
import { Category } from "../../typings/enums";

export const productCreateSchema = z.strictObject({
  name: z.string(),
  category: z.nativeEnum(Category),
  price: z.number().min(0),
  description: z.string(),
  stock: z.number().min(0),
});
