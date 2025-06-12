import registerAccount from "@/data/auth/registerAccount";
import { useState } from "react";

export default function useRegisterAccount() {
  const [message, setMessage] = useState<string>("");

  async function RegisterAccount(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (email && password) {
      const result = await registerAccount(
        email.toString(),
        password.toString()
      );
      setMessage(result.message);
    } else {
      setMessage("Wrong typed credentials");
    }
  }

  return { RegisterAccount, message };
}
