import { ApiResponse_T, User } from "@/typings/global";
import axios from "axios";

export default async function loginAccount(
  email: string,
  password: string
): Promise<{ response: ApiResponse_T; user?: User }> {
  try {
    const result = await axios.post(
      `${process.env.BACKEND_API_URL}/auth/login`,
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
    return {
      response: {
        code: result.status,
        message: result.data.message,
      },
      user: {
        email: result.data.email,
        role: result.data.role,
      },
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        response: {
          code: err.status || 500,
          message: err.response?.data.message || "Unexpected server error.",
        },
      };
    }
    return { response: { code: 500, message: "Unexpected server error." } };
  }
}
