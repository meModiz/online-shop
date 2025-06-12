export default function AuthButton({ title }: { title: string }) {
  return (
    <button
      type="submit"
      className="w-1/2 flex flex-row justify-center items-start bg-black text-white rounded-md p-4 hover:bg-neutral-800"
    >
      {title}
    </button>
  );
}
