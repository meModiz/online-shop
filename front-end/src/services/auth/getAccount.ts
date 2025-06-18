import { ApiResponse_T, User } from "@/typings/global";
import axios from "axios";

export default async function getAccount(): Promise<{
  response?: ApiResponse_T;
  user?: User;
}> {
  try {
    const result = await axios.get(`http://localhost:3001/auth/verify`, {
      withCredentials: true,
    });
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
    return { response: { code: 500, message: "Unexpected server error." } };
  }
}
