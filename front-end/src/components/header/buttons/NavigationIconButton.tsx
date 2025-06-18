import Link from "next/link";
import { NavigationIcon_T, NavigationIcons } from "@/typings/header";
import { Heart, ShieldAlert, ShoppingCart, User } from "lucide-react";
export default function NavigationIconButton({
  icon,
  route,
  active,
}: {
  icon: NavigationIcon_T;
  route: string;
  active: boolean;
}) {
  const IconComponent = () => {
    switch (icon) {
      case NavigationIcons.HEART:
        return <Heart color="black" size={22} />;
      case NavigationIcons.SHOPPING_CART:
        return <ShoppingCart color="black" size={22} />;
      case NavigationIcons.USER:
        return <User color="black" size={22} />;
      case NavigationIcons.ADMIN:
        return <ShieldAlert color="black" size={22} />;
    }
  };

  return (
    <Link
      href={route}
      className={`${active ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
    >
      <IconComponent />
    </Link>
  );
}
