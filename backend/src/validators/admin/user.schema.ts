import { z } from "zod/v4";

export const userSchema = z.strictObject({
  email: z.email(),
});
