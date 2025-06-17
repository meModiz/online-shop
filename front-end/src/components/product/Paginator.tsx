import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

function PageButton({
  page,
  current,
  onClick,
}: {
  page: number;
  current: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex justify-center items-center rounded-md px-3 py-1 hover:opacity-70 ${
        current ? "bg-black text-white" : "bg-[#F6F6F6] text-black"
      }`}
      onClick={onClick}
    >
      <span className="text-base">{page}</span>
    </div>
  );
}

function AllowChangePage(
  currentPage: number,
  maxPageCount: number,
  forward: boolean
) {
  return (
    (forward && currentPage + 1 <= maxPageCount) ||
    (!forward && currentPage - 1 >= 1)
  );
}

export default function Paginator({
  currentPage,
  maxPageCount,
  setCurrentPage,
}: {
  currentPage: number;
  maxPageCount: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-row justify-center items-center w-1/2 pb-8">
      <ChevronLeft
        color="black"
        onClick={() => {
          AllowChangePage(currentPage, maxPageCount, false) &&
            setCurrentPage((prev) => prev - 1);
        }}
      />
      <div className="flex flex-row justify-center items-center gap-2 select-none">
        {Array.from({ length: maxPageCount }).map((_, page) => (
          <PageButton
            key={page}
            page={page + 1}
            current={page + 1 === currentPage}
            onClick={() => {
              console.log("test");
              setCurrentPage(page + 1);
            }}
          />
        ))}
      </div>
      <ChevronRight
        color="black"
        onClick={() => {
          AllowChangePage(currentPage, maxPageCount, true) &&
            setCurrentPage((prev) => prev + 1);
        }}
      />
    </div>
  );
}
