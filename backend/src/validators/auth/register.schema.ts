import { z } from "zod/v4";

export const registerSchema = z.strictObject({
  email: z.email(),
  password: z.string().min(6),
});
