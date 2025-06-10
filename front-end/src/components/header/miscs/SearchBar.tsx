import { Search } from "lucide-react";
export default function SearchBar() {
  return (
    <div className="flex flex-row justify-start items-center bg-[#F5F5F5] p-4 flex-1 rounded-lg gap-2">
      <Search color="#989898" size={20} />
      <span className="text-[#656565] text-sm font-medium">Search</span>
    </div>
  );
}
