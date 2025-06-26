import { ApiResponse_T } from "@/typings/global";
import axios from "axios";

export default async function logoutAccount(): Promise<{
  response: ApiResponse_T;
}> {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/logout`,
      {
        withCredentials: true,
      }
    );
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
          message: err.response?.data.message || "Unexpected server error.",
        },
      };
    }
    return { response: { code: 500, message: "Unexpected server error." } };
  }
}
