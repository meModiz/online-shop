import loginAccount from "@/services/auth/loginAccount";
import { useState } from "react";
import { useAuthStore } from "./useAuthStore";

export default function useLoginAccount() {
  const [message, setMessage] = useState<string>("");
  const setUserRole = useAuthStore((state) => state.setUserRole);
  const setUserEmail = useAuthStore((state) => state.setUserEmail);
  async function LoginAccount(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (email && password) {
      const result = await loginAccount(email.toString(), password.toString());
      setMessage(result.response.message);
      if (result.user) {
        setUserRole(result.user.role);
        setUserEmail(result.user.email);
      }
    } else {
      setMessage("Wrong typed credentials");
    }
  }

  return { LoginAccount, message };
}
