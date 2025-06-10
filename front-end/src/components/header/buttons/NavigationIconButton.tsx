import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { NavigationIcon_T } from "@/typings/header";
export default function NavigationIconButton({
  icon,
  route,
}: {
  icon: NavigationIcon_T;
  route: string;
}) {
  return (
    <Link href={route}>
      <DynamicIcon name={icon} color="black" size={22} />
    </Link>
  );
}
