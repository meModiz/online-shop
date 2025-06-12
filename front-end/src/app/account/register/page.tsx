"use client";
import RegisterForm from "@/components/auth/forms/RegisterForm";
import useRegisterAccount from "@/hooks/auth/useRegisterAccount";

export default function AccountRegisterPage() {
  const { RegisterAccount, message } = useRegisterAccount();

  return (
    <div className="flex flex-col justify-center items-start w-full px-40 pt-16 gap-4">
      <h1 className="text-black text-xl">Account registration</h1>
      <RegisterForm submitAction={RegisterAccount} />
      <div className="text-red-400">{message}</div>
    </div>
  );
}
