import Link from "next/link";
import { NavigationIcon_T, NavigationIcons } from "@/typings/header";
import { Heart, ShieldAlert, ShoppingCart, User } from "lucide-react";
import { useAuthStore } from "@/hooks/auth/useAuthStore";
export default function NavigationIconButton({
  icon,
  route,
  active,
}: {
  icon: NavigationIcon_T;
  route: string;
  active: boolean;
}) {
  const userRole = useAuthStore((state) => state.userRole);
  const IconComponent = () => {
    switch (icon) {
      case NavigationIcons.HEART:
        return <Heart color="black" size={22} />;
      case NavigationIcons.SHOPPING_CART:
        return <ShoppingCart color="black" size={22} />;
      case NavigationIcons.USER:
        return <User color="black" size={22} />;
      case NavigationIcons.ADMIN:
        if (userRole === "ADMIN") {
          return <ShieldAlert color="black" size={22} />;
        }
        return;
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
