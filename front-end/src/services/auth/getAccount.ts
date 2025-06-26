import { ApiResponse_T, User } from "@/typings/global";
import axios from "axios";

export default async function getAccount(): Promise<{
  response?: ApiResponse_T;
  user?: User;
}> {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/verify`,
      {
        withCredentials: true,
      }
    );
    if (result.data.user) {
      return {
        user: {
          email: result.data.user.userEmail,
          role: result.data.user.role,
        },
      };
    }
    return {
      response: {
        code: result.status,
        message: result.data.message,
      },
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        response: {
          code: err.status || 500,
          message: err.response?.data.message || "You are not an admin",
        },
      };
    }
    return { response: { code: 500, message: "Unexpected server error." } };
  }
}
