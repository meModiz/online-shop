import useAccountVerify from "@/hooks/auth/useAccountVerify";
import { useAuthStore } from "@/hooks/auth/useAuthStore";
import { ReactElement, useEffect } from "react";

export default function AdminProtectedRoute({
  children,
}: {
  children: ReactElement;
}) {
  const { errorMessage, verifyAccount } = useAccountVerify();
  const userRole = useAuthStore((state) => state.userRole);

  useEffect(() => {
    verifyAccount();
  }, [verifyAccount]);

  if (userRole !== "ADMIN") {
    return (
      <div className="flex items-center justify-center w-full pt-16 text-xl text-white">
        <div className="bg-black/80 rounded-sm p-5">
          {errorMessage || "You are not admin!"}
        </div>
      </div>
    );
  }
  return children;
}
