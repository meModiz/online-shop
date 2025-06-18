import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";
import Link from "next/link";
import { CategoryIcon_T, CategoryIcons, ROUTES } from "@/typings/header";
export default function CategoryButton({
  icon,
  title,
  route,
  active,
}: {
  icon: CategoryIcon_T;
  title: string;
  route: string;
  active: boolean;
}) {
  const IconComponent = () => {
    switch (icon) {
      case CategoryIcons.SMARTPHONE:
        return <Smartphone color="white" size={22} />;
      case CategoryIcons.MONITOR:
        return <Monitor color="white" size={22} />;
      case CategoryIcons.WATCH:
        return <Watch color="white" size={22} />;
      case CategoryIcons.CAMERA:
        return <Camera color="white" size={22} />;
      case CategoryIcons.HEADPHONES:
        return <Headphones color="white" size={22} />;
      case CategoryIcons.GAMING:
        return <Gamepad2 color="white" size={22} />;
    }
  };

  return (
    <Link href={route}>
      <div
        className={`flex flex-row justify-center items-center gap-3.5 ${
          active ? "opacity-90" : "opacity-50"
        }`}
      >
        <IconComponent />
        <span className="text-base text-white font-medium">{title}</span>
      </div>
    </Link>
  );
}
