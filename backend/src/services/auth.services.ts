import bcrypt from "bcrypt";

const saltRounds = 10;

export async function hashPassword(password: string): Promise<string | null> {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch {
    return null;
  }
}
