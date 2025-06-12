import loginAccount from "@/data/auth/loginAccount";
import { useState } from "react";

export default function useLoginAccount() {
  const [message, setMessage] = useState<string>("");

  async function LoginAccount(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (email && password) {
      const result = await loginAccount(email.toString(), password.toString());
      setMessage(result.message);
    } else {
      setMessage("Wrong typed credentials");
    }
  }

  return { LoginAccount, message };
}
