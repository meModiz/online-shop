"use client";
import phone from "@/../public/phone.png";
import { Product_T } from "@/typings/product";
import { Heart } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import { useState } from "react";
export default function ProductCard({ name, price, id }: Product_T) {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function getIconColor() {
    if (!isFavorited && !isHovered) return "rgb(144,144,144,0.77)";
    else if (!isFavorited && isHovered) return "#fca5a5";
    else if (isFavorited && !isHovered) return "#ef4444";
    else if (isFavorited && isHovered) return "#d1d5db";
  }

  return (
    <div className="flex flex-col justify-center items-center bg-[#F6F6F6] py-6 px-4 gap-4 rounded-lg">
      <Heart
        color={getIconColor()}
        size={26}
        className="self-end"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onClick={() => {
          setIsFavorited(!isFavorited);
        }}
      />
      <Image
        src={phone}
        sizes="100vw"
        style={{
          width: "auto",
          height: "auto",
        }}
        alt="Product image"
      />
      <span className="text-black text-center">
        {name}
        <br /> #{String(id).padStart(6, "0")}
      </span>
      <span className="text-2xl text-black font-semibold">${price}</span>
      <div className="bg-black text-white text-sm px-16 py-3 rounded-lg hover:bg-neutral-900 select-none">
        Buy now
      </div>
    </div>
  );
}
