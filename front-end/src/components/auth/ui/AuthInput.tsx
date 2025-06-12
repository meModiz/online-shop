export default function AuthInput({
  name,
  placeholder,
  type,
  required,
}: {
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
}) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
      className="w-full flex flex-row justify-center items-start pl-4 py-4 border-[1px] border-[#9F9F9F] rounded-lg"
    />
  );
}
