import { z } from "zod/v4";

export const authSchema = z.strictObject({
  email: z.email(),
  password: z.string().min(6),
});
