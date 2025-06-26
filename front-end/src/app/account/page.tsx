"use client";
import Button from "@/components/auth/ui/Button";
import { useAuthStore } from "@/hooks/auth/useAuthStore";
import logoutAccount from "@/services/auth/logoutAccount";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
  const router = useRouter();
  const setUserRole = useAuthStore((state) => state.setUserRole);
  const setUserEmail = useAuthStore((state) => state.setUserEmail);
  const userEmail = useAuthStore((state) => state.userEmail);
  const userRole = useAuthStore((state) => state.userRole);

  useEffect(() => {
    if (!(userEmail !== null && userRole !== null)) {
      router.push("/");
    }
  }, [userEmail, userRole, router]);

  async function logoutUser() {
    setUserRole(null);
    setUserEmail(null);
    router.push("/");
    await logoutAccount();
  }

  return (
    <div className="flex flex-col justify-center items-start w-full px-40 pt-16 gap-4">
      <h1 className="text-black text-2xl font-bold">Your account</h1>
      <span className="text-xl">Your Email: {userEmail}</span>
      <span className="text-xl">Your Role: {userRole}</span>
      <div className="w-1/4">
        <Button title={"Logout"} onClick={logoutUser} />
      </div>
    </div>
  );
}
