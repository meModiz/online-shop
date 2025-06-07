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
import jwt from "jsonwebtoken";
export async function signInJWT(id: number, email: string) {
  const token = await jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        userId: id,
        userEmail: email,
      },
    },
    `${process.env.JWT_SECRET}`
  );

  return token;
}

export async function checkJwtToken(token: string) {
  const isCorrect = await jwt.verify(token, `${process.env.JWT_SECRET}`);
  return isCorrect;
}
