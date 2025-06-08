import { ApiError_T } from "../typings/types";
import { HTTP } from "../utils/statusCodes";
import { compareHashedPasswords } from "./hash.services";
import { signInJWT } from "./jwt.services";

export async function authenticateUser(
  inputPassword: string,
  userRecord: { id: number; email: string; password: string; role: string }
): Promise<{ logged: boolean; token?: string; error?: ApiError_T }> {
  const isPasswordMatches = await compareHashedPasswords(inputPassword, userRecord.password);

  if (isPasswordMatches === null) {
    return {
      logged: false,
      error: { code: HTTP.INTERNAL_SERVER_ERROR, message: "Can't compare password. Bcrypt problem." },
    };
  } else if (isPasswordMatches === false) {
    return {
      logged: false,
      error: { code: HTTP.BAD_REQUEST, message: "Wrong credentials. (bad password)" },
    };
  }

  try {
    const token = await signInJWT(userRecord.id, userRecord.email, userRecord.role);
    return { logged: true, token: token };
  } catch (err) {
    return { logged: false, error: { code: HTTP.INTERNAL_SERVER_ERROR, message: "Sign in JWT unsuccesfull" } };
  }
}
