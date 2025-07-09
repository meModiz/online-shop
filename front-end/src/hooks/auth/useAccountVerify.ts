"use client";
import { useState } from "react";
import { useAuthStore } from "./useAuthStore";
import getAccount from "@/services/auth/getAccount";

export default function useAccountVerify() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setUserRole = useAuthStore((state) => state.setUserRole);
  const setUserEmail = useAuthStore((state) => state.setUserEmail);
  async function verifyAccount() {
    const result = await getAccount();
    if (result.user) {
      setUserRole(result.user.role);
      setUserEmail(result.user.email);
    } else if (result.response) {
      setUserEmail(null);
      setUserRole("USER");
      setErrorMessage(result.response.message);
    } else {
      setErrorMessage("Unexpected error");
    }
  }

  return { errorMessage, verifyAccount };
}
