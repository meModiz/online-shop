import { ChevronRight } from "lucide-react";

export default function PathDisplay() {
  return (
    <div className="flex flex-row justify-start items-center w-full py-11">
      <span className="text-[#A4A4A4]">Home</span>
      <ChevronRight color="#A4A4A4" size={22} />
      <span className="text-[#A4A4A4]">Catalog</span>
      <ChevronRight color="#A4A4A4" size={22} />
      <span className="text-black">Smartphones</span>
    </div>
  );
}
