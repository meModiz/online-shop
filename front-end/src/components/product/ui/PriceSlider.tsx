"use client";
import { useState } from "react";

export default function PriceSlider() {
  const [price, setPrice] = useState(0);
  return (
    <input
      type="range"
      min="0"
      max="1000"
      value={price}
      onChange={(e) => setPrice(Number(e.target.value))}
      className="w-full"
    />
  );
}
