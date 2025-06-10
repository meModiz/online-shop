"use client";
import { ROUTES } from "@/typings/header";
import CategoryButton from "../buttons/CategoryButton";
import Divider from "../miscs/Divider";
import { usePathname } from "next/navigation";

export default function CategoryBar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row items-center justify-between bg-[#2E2E2E] h-12 w-full px-40">
      <CategoryButton
        icon={ROUTES.category.phones.icon}
        title={ROUTES.category.phones.label}
        route={ROUTES.category.phones.path}
        active={pathname === ROUTES.category.phones.path}
      />
      <Divider />
      <CategoryButton
        icon={ROUTES.category.computers.icon}
        title={ROUTES.category.computers.label}
        route={ROUTES.category.computers.path}
        active={pathname === ROUTES.category.computers.path}
      />
      <Divider />
      <CategoryButton
        icon={ROUTES.category.watches.icon}
        title={ROUTES.category.watches.label}
        route={ROUTES.category.watches.path}
        active={pathname === ROUTES.category.watches.path}
      />
      <Divider />
      <CategoryButton
        icon={ROUTES.category.cameras.icon}
        title={ROUTES.category.cameras.label}
        route={ROUTES.category.cameras.path}
        active={pathname === ROUTES.category.cameras.path}
      />
      <Divider />
      <CategoryButton
        icon={ROUTES.category.audio.icon}
        title={ROUTES.category.audio.label}
        route={ROUTES.category.audio.path}
        active={pathname === ROUTES.category.audio.path}
      />
      <Divider />
      <CategoryButton
        icon={ROUTES.category.gaming.icon}
        title={ROUTES.category.gaming.label}
        route={ROUTES.category.gaming.path}
        active={pathname === ROUTES.category.gaming.path}
      />
    </div>
  );
}
