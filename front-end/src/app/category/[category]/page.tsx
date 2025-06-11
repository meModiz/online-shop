"use client";
import ProductCard from "@/components/product/ui/ProductCard";
import fetchProducts from "@/data/fetchProducts";
import { Error_T, Product_T } from "@/typings/product";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product_T[]>();
  const [error, setError] = useState<Error_T>();

  async function getProducts() {
    const result = await fetchProducts(page);
    if (Array.isArray(result.response)) {
      setError(undefined);
      setProducts(result.response);
    } else {
      setProducts(undefined);
      setError(result.response);
    }
  }

  useEffect(() => {
    getProducts();
  }, [page]);
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
