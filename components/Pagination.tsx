"use client";

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
    <div className="flex items-center gap-2 w-max m-auto py-10">
      {currentPage > 1 && (
        <button onClick={() => handleClick("prev")} className="prev bg-blue-100 p-2 rounded">
          Prev {currentPage - 1}
        </button>
      )}

      <p >{currentPage}</p>

      {currentPage < totalPages && (
        <button onClick={() => handleClick("next")} className="next bg-blue-100 p-2 rounded">
          Next {currentPage + 1}
        </button>
      )}
    </div>
  );
}
