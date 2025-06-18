"use client";
import Button from "@/components/auth/ui/Button";
import { useAuthStore } from "@/hooks/auth/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
  const router = useRouter();
  const setUserRole = useAuthStore((state) => state.setUserRole);
  const setUserEmail = useAuthStore((state) => state.setUserEmail);
  const user_email = useAuthStore((state) => state.user_email);
  const user_role = useAuthStore((state) => state.user_role);

  useEffect(() => {
    if (!(user_email !== null && user_role !== null)) {
      router.push("/");
    }
  }, [user_email, user_role]);

  function LogoutAccount() {
    setUserRole(null);
    setUserEmail(null);
    router.push("/");
  }

  return (
    <div className="flex flex-col justify-center items-start w-full px-40 pt-16 gap-4">
      <div className="w-1/4">
        <Button title={"Logout"} onClick={LogoutAccount} />
      </div>
    </div>
  );
}
