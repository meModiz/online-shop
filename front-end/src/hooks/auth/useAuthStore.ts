import { create } from "zustand";

type AuthState = {
  userEmail: string | null;
  userRole: string | null;
  setUserRole: (role: string | null) => void;
  setUserEmail: (email: string | null) => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  userEmail: null,
  userRole: null,
  setUserRole: (role) => set(() => ({ userRole: role })),
  setUserEmail: (email) => set(() => ({ userEmail: email })),
}));
