"use client";
import ProductCard from "@/components/product/ui/ProductCard";
import useGetProducts from "@/hooks/products/useGetProducts";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const category = params.category as string;
  const { setPage, products, error } = useGetProducts();
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {error ? (
        <div>
          {error.code} | {error.message}
        </div>
      ) : (
        products?.map((product, index) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))
      )}
      <div
        className="bg-red-600 p-5"
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Increase page
      </div>
    </div>
  );
}
