export default function Button({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="submit"
      className="w-1/2 flex flex-row justify-center items-start bg-black text-white rounded-md p-4 hover:bg-neutral-800"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
