"use client";
import Button from "@/components/auth/ui/Button";
import useAccountVerify from "@/hooks/auth/useAccountVerify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { role, errorMessage, verifyAccount } = useAccountVerify();
  const router = useRouter();

  useEffect(() => {
    verifyAccount();
  }, [verifyAccount]);

  return (
    <>
      {role === "ADMIN" && role !== null ? (
        <div className="flex flex-col justify-center items-center w-full px-40 pt-16 gap-5">
          <span className="text-xl bg-black/80 rounded-xl p-4 text-white">
            ADMIN MENU
          </span>
          <div className="flex gap-4 flex-col w-1/3 items-center justify-center">
            <Button
              title={"Users"}
              onClick={() => router.push("admin/users")}
            />
            <Button
              title={"Products"}
              onClick={() => router.push("admin/products")}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full pt-16 text-xl text-white">
          <div className="bg-black/80 rounded-sm p-5">
            {errorMessage || "You are not admin!"}
          </div>
        </div>
      )}
    </>
  );
}
