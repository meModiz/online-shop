"use client";
import { useState } from "react";
import { useAuthStore } from "./useAuthStore";
import getAccount from "@/services/auth/getAccount";

export default function useAccountVerify() {
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setUserRole = useAuthStore((state) => state.setUserRole);
  const setUserEmail = useAuthStore((state) => state.setUserEmail);
  async function verifyAccount() {
    const result = await getAccount();
    if (result.user) {
      setUserRole(result.user.role);
      setUserEmail(result.user.email);
      setEmail(result.user.email);
      setRole(result.user.role);
    } else if (result.response) {
      if (result.response.code === 401) {
        setEmail(null);
        setRole("USER");
      }
      setErrorMessage(result.response.message);
    } else {
      setErrorMessage("Unexpected error");
    }
  }

  return { email, role, errorMessage, verifyAccount };
}
