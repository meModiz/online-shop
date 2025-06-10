"use client";
import NavigationTextButton from "@/components/header/buttons/NavigationTextButton";
import { usePathname } from "next/navigation";
import NavigationIconButton from "../buttons/NavigationIconButton";
import { ROUTES } from "@/typings/header";

export function NavigationIconButtons() {
  return (
    <div className="flex flex-row justify-center items-center gap-6 select-none">
      <NavigationIconButton
        icon={ROUTES.favorites.icon}
        route={ROUTES.favorites.path}
      />
      <NavigationIconButton icon={ROUTES.cart.icon} route={ROUTES.cart.path} />
      <NavigationIconButton
        icon={ROUTES.account.icon}
        route={ROUTES.account.path}
      />
    </div>
  );
}

export function NavigationTextButtons() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row justify-center items-center gap-12 select-none">
      <NavigationTextButton
        active={pathname === ROUTES.home.path}
        title={ROUTES.home.label}
        route={ROUTES.home.path}
      />
      <NavigationTextButton
        active={pathname === ROUTES.about.path}
        title={ROUTES.about.label}
        route={ROUTES.about.path}
      />
      <NavigationTextButton
        active={pathname === ROUTES.contact.path}
        title={ROUTES.contact.label}
        route={ROUTES.contact.path}
      />
      <NavigationTextButton
        active={pathname === ROUTES.blog.path}
        title={ROUTES.blog.label}
        route={ROUTES.blog.path}
      />
    </div>
  );
}
