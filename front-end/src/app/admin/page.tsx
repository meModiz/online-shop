"use client";
import AdminPageRestriction from "@/components/admin/AdminPageRestriction";
import Button from "@/components/auth/ui/Button";
import { useRouter } from "next/navigation";
export default function AdminPage() {
  const router = useRouter();

  return (
    <AdminPageRestriction
      children={
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
      }
    />
  );
}
