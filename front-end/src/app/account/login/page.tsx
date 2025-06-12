"use client";
import AuthButton from "@/components/auth/ui/AuthButton";
import AuthInput from "@/components/auth/ui/AuthInput";
import loginAccount from "@/data/auth/loginAccount";
import { useState } from "react";

export default function AccountLoginPage() {
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

  return (
    <div className="flex flex-col justify-center items-start w-full px-40 pt-16 gap-4">
      <h1 className="text-black text-xl">Log in account</h1>
      <form
        className="flex flex-col justify-center w-1/3 gap-2"
        action={(formData) => LoginAccount(formData)}
      >
        <AuthInput
          name="email"
          placeholder="Email adress"
          type="email"
          required={true}
        />
        <AuthInput
          name="password"
          placeholder="Password"
          type="password"
          required={true}
        />
        <AuthButton title="Log in" />
      </form>
      <div className="text-red-400">{message}</div>
    </div>
  );
}
