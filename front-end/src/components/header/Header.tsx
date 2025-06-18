"use client";
import { useEffect } from "react";
import CategoryBar from "./components/CategoryBar";
import NavigationBar from "./components/NavigationBar";
import useAccountVerify from "@/hooks/auth/useAccountVerify";

export default function Header() {
  const { email, role, errorMessage, verifyAccount } = useAccountVerify();
  useEffect(() => {
    verifyAccount();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <NavigationBar />
      <CategoryBar />
    </div>
  );
}
