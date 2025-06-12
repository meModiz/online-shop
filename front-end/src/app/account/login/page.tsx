"use client";
import LoginForm from "@/components/auth/forms/LoginForm";
import useLoginAccount from "@/hooks/auth/useLoginAccount";

export default function AccountLoginPage() {
  const { LoginAccount, message } = useLoginAccount();

  return (
    <div className="flex flex-col justify-center items-start w-full px-40 pt-16 gap-4">
      <h1 className="text-black text-xl">Log in account</h1>
      <LoginForm submitAction={LoginAccount} />
      <div className="text-red-400">{message}</div>
    </div>
  );
}
