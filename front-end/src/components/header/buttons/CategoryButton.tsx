import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { CategoryIcon_T } from "@/typings/header";
export default function CategoryButton({
  icon,
  title,
  route,
}: {
  icon: CategoryIcon_T;
  title: string;
  route: string;
}) {
  return (
    <Link href={route}>
      <div className="flex flex-row justify-center items-center opacity-50 gap-3.5">
        <DynamicIcon name={icon} color="white" size={22} />
        <span className="text-base text-white font-medium">{title}</span>
      </div>
    </Link>
  );
}
