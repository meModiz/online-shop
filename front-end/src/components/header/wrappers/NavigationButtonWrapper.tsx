"use client";
import NavigationTextButton from "@/components/header/buttons/NavigationTextButton";
import { usePathname } from "next/navigation";
import NavigationIconButton from "../buttons/NavigationIconButton";
import { NavigationIcons } from "@/typings/header";

export function NavigationIconButtons() {
  return (
    <div className="flex flex-row justify-center items-center gap-6 select-none">
      <NavigationIconButton icon={NavigationIcons.HEART} route={"/likes"} />
      <NavigationIconButton
        icon={NavigationIcons.SHOPPING_CART}
        route={"/cart"}
      />
      <NavigationIconButton icon={NavigationIcons.USER} route={"/account"} />
    </div>
  );
}

export function NavigationTextButtons() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row justify-center items-center gap-12 select-none">
      <NavigationTextButton
        active={pathname === "/"}
        title={"Home"}
        route={"/"}
      />
      <NavigationTextButton
        active={pathname === "/about"}
        title={"About"}
        route={"/about"}
      />
      <NavigationTextButton
        active={pathname === "/contact"}
        title={"Contact us"}
        route={"/contact"}
      />
      <NavigationTextButton
        active={pathname === "/blog"}
        title={"Blog"}
        route={"/blog"}
      />
    </div>
  );
}
