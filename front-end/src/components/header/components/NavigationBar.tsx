import Image from "next/image";
import Logo from "@/../public/logo.svg";
import SearchBar from "@/components/header/miscs/SearchBar";
import {
  NavigationIconButtons,
  NavigationTextButtons,
} from "../wrappers/NavigationButtonWrapper";
export default function NavigationBar() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-20 px-40">
      <Image
        src={Logo}
        sizes="100vw"
        style={{
          width: "auto",
          height: "60%",
        }}
        alt="Website logo"
        className="object-contain"
      />
      <SearchBar />
      <NavigationTextButtons />
      <NavigationIconButtons />
    </div>
  );
}
