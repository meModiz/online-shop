"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("account/register");
  }, []);

  return <div className="w-full h-96 bg-[#211C24]">Account</div>;
}
