import bcrypt from "bcrypt";
const saltRounds = 10;

export async function hashPassword(password: string): Promise<string | null> {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch {
    return null;
  }
}

export async function compareHashedPasswords(plainPassword: string, hashedPassword: string): Promise<boolean | null> {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch {
    return null;
  }
}
