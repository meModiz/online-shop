import { CategoryIcons } from "@/typings/header";
import CategoryButton from "../buttons/CategoryButton";
import Divider from "../miscs/Divider";

export default function CategoryBar() {
  return (
    <div className="flex flex-row items-center justify-between bg-[#2E2E2E] h-12 w-full px-40">
      <CategoryButton
        icon={CategoryIcons.SMARTPHONE}
        title={"Phones"}
        route={"/category/phones"}
      />
      <Divider />
      <CategoryButton
        icon={CategoryIcons.MONITOR}
        title={"Computers"}
        route={"/category/computers"}
      />
      <Divider />
      <CategoryButton
        icon={CategoryIcons.WATCH}
        title={"Smart Watches"}
        route={"/category/watches"}
      />
      <Divider />
      <CategoryButton
        icon={CategoryIcons.CAMERA}
        title={"Camera"}
        route={"/category/cameras"}
      />
      <Divider />
      <CategoryButton
        icon={CategoryIcons.HEADPHONES}
        title={"Headphones"}
        route={"/category/audio"}
      />
      <Divider />
      <CategoryButton
        icon={CategoryIcons.GAMING}
        title={"Gaming"}
        route={"/category/gaming"}
      />
    </div>
  );
}
