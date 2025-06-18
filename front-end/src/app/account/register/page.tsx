"use client";
import RegisterForm from "@/components/auth/forms/RegisterForm";
import useRegisterAccount from "@/hooks/auth/useRegisterAccount";
import Link from "next/link";

export default function AccountRegisterPage() {
  const { RegisterAccount, message } = useRegisterAccount();

  return (
    <div className="flex flex-col justify-center items-start w-full px-40 pt-16 gap-4">
      <h1 className="text-black text-xl">Account registration</h1>
      <RegisterForm submitAction={RegisterAccount} />
      <Link href="login" className="text-sm self-start text-black">
        Already have an account?{" "}
        <span className="text-sm text-blue-500 underline">Click to login</span>
      </Link>
      <div className="text-red-400">{message}</div>
    </div>
  );
}
