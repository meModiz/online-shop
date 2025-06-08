import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function signInJWT(id: number, email: string, role: string): Promise<string> {
  if (!JWT_SECRET) throw new Error("JWT_SECRET is required");
  const token = await jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        userId: id,
        userEmail: email,
        role: role,
      },
    },
    JWT_SECRET
  );

  return token;
}

export async function getUserByJWT(token: string) {
  try {
    if (!JWT_SECRET) throw new Error("JWT_SECRET is required");
    const user = (await jwt.verify(token, JWT_SECRET)) as JwtPayload;
    return user;
  } catch (err) {
    return false;
  }
}
