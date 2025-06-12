import { ApiResponse_T } from "@/typings/global";
import axios from "axios";

export default async function loginAccount(
  email: string,
  password: string
): Promise<ApiResponse_T> {
  try {
    const result = await axios.post(
      `http://localhost:3001/auth/login`,
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
    return {
      code: result.status,
      message: result.data.message,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        code: err.status || 500,
        message: err.response?.data.message || "Unexpected server error.",
      };
    }
    return { code: 500, message: "Unexpected server error." };
  }
}
