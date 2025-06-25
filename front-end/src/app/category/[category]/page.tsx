"use client";
import Paginator from "@/components/product/Paginator";
import ProductCard from "@/components/product/ui/ProductCard";
import useGetProducts from "@/hooks/products/useGetProducts";

export default function ProductPage() {
  const {
    setCurrentPage,
    products,
    error,
    maxPage,
    currentPage,
    isLoadingProducts,
  } = useGetProducts();
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <div className="grid grid-cols-3 gap-4 w-full">
        {!isLoadingProducts ? (
          error ? (
            <div>
              {error.code} | {error.message}
            </div>
          ) : (
            products?.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            ))
          )
        ) : (
          <div>Loading</div>
        )}
      </div>
      <Paginator
        currentPage={currentPage}
        maxPageCount={maxPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
