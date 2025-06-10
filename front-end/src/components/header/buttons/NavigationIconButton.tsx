import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { NavigationIcon_T } from "@/typings/header";
export default function NavigationIconButton({
  icon,
  route,
  active,
}: {
  icon: NavigationIcon_T;
  route: string;
  active: boolean;
}) {
  return (
    <Link
      href={route}
      className={`${active ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
    >
      <DynamicIcon name={icon} color="black" size={22} />
    </Link>
  );
}
