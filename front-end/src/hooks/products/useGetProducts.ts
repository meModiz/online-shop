import fetchProducts from "@/data/products/fetchProducts";
import { Product_T, ProductError_T } from "@/typings/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useGetProducts() {
  const params = useParams();
  const category = params.category as string;
  const [maxPage, setMaxPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Product_T[]>();
  const [error, setError] = useState<ProductError_T>();
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false);

  async function getProducts() {
    setIsLoadingProducts(true);
    const result = await fetchProducts(currentPage, category);
    if (result.response.sucess) {
      setError(undefined);
      setProducts(result.response.products);
      setMaxPage(result.response.totalProductPages);
    } else if (result.response.sucess === false) {
      setProducts(undefined);
      setError(result.response);
    }
    setIsLoadingProducts(false);
  }

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return {
    setCurrentPage,
    products,
    error,
    maxPage,
    currentPage,
    isLoadingProducts,
  };
}
