import Link from "next/link";

export default function NavigationTextButton({
  active,
  title,
  route,
}: {
  active: boolean;
  title: string;
  route: string;
}) {
  return (
    <Link href={route}>
      <div
        className={`font-medium text-base text-black ${
          active ? "opacity-100" : "opacity-30 hover:opacity-50"
        }`}
      >
        {title}
      </div>
    </Link>
  );
}
