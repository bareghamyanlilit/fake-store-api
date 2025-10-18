"use client";
import { Product } from "@/lib/type";

type PaginationProps = {
  currentPage: number;
  handleClick: (buttonName: "prev" | "next") => void;
  totalPages:number
};
export default function Pagination({
  currentPage,
  handleClick,
  totalPages
}: PaginationProps) {
  return (
    <div className="flex gap-2 w-max m-auto py-5">
      {currentPage > 1 && (
        <button onClick={() => handleClick("prev")} className="prev">
          Prev {currentPage - 1}
        </button>
      )}

      <p className="border-2">{currentPage}</p>

      {currentPage < totalPages && (
        <button onClick={() => handleClick("next")} className="next">
          Next {currentPage + 1}
        </button>
      )}
    </div>
  );
}
