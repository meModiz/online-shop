import fetchProducts from "@/data/products/fetchProducts";
import { ApiResponse_T } from "@/typings/global";
import { Product_T } from "@/typings/product";
import { useEffect, useState } from "react";

export default function useGetProducts() {
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product_T[]>();
  const [error, setError] = useState<ApiResponse_T>();

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

  return { setPage, products, error };
}
