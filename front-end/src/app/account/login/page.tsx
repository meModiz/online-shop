"use client";
import LoginForm from "@/components/auth/forms/LoginForm";
import { useAuthStore } from "@/hooks/auth/useAuthStore";
import useLoginAccount from "@/hooks/auth/useLoginAccount";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountLoginPage() {
  const router = useRouter();
  const user_email = useAuthStore((state) => state.user_email);
  const user_role = useAuthStore((state) => state.user_role);

  useEffect(() => {
    if (user_email !== null && user_role !== null) {
      router.push("/account");
    }
  }, [user_email, user_role, router]);

  const { LoginAccount, message } = useLoginAccount();
  return (
    <div className="flex flex-col justify-center items-start w-full px-40 pt-16 gap-4">
      <h1 className="text-black text-xl">Log in account</h1>
      <LoginForm submitAction={LoginAccount} />
      <Link href="register" className="text-sm self-start text-black">
        Dont have an account yet?{" "}
        <span className="text-sm text-blue-500 underline">Sign up</span>
      </Link>
      <div className="text-red-400">{message}</div>
    </div>
  );
}
