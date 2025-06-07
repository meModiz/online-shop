import jwt, { JwtPayload } from "jsonwebtoken";
export async function signInJWT(id: number, email: string, role: string): Promise<string> {
  const token = await jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        userId: id,
        userEmail: email,
        role: role,
      },
    },
    `${process.env.JWT_SECRET}`
  );

  return token;
}

export async function getUserByJWT(token: string) {
  try {
    const user = (await jwt.verify(token, `${process.env.JWT_SECRET}`)) as JwtPayload;
    return user;
  } catch (err) {
    return false;
  }
}
