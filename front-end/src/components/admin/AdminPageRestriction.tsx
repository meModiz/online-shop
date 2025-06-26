import useAccountVerify from "@/hooks/auth/useAccountVerify";
import { ReactElement, useEffect } from "react";

export default function AdminPageRestriction({
  children,
}: {
  children: ReactElement;
}) {
  const { role, errorMessage, verifyAccount } = useAccountVerify();

  useEffect(() => {
    verifyAccount();
  }, [verifyAccount]);

  if (role === "ADMIN" && role !== null) {
    return children;
  }

  return (
    <div className="flex items-center justify-center w-full pt-16 text-xl text-white">
      <div className="bg-black/80 rounded-sm p-5">
        {errorMessage || "You are not admin!"}
      </div>
    </div>
  );
}
