import { create } from "zustand";

type AuthState = {
  user_email: string | null;
  user_role: string | null;
  setUserRole: (role: string | null) => void;
  setUserEmail: (email: string | null) => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  user_email: null,
  user_role: null,
  setUserRole: (role) => set((state) => ({ user_role: role })),
  setUserEmail: (email) => set((state) => ({ user_email: email })),
}));
