import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const numLinksToShow = 4;
  const startLink = Math.max(1, currentPage - Math.floor(numLinksToShow / 2));
  const endLink = Math.min(totalPages, startLink + numLinksToShow - 1);

  const pageLinks = Array.from(
    { length: endLink - startLink + 1 },
    (_, i) => startLink + i
  ).map((pageNumber) => {
    const isCurrentPage = pageNumber === currentPage;
    return (
      <li key={pageNumber}>
        <button
          className={`btn btn-circle ${
            isCurrentPage
              ? "bg-slate-400 hover:bg-slate-500"
              : "bg-slate-200 hover:bg-slate-300"
          } text-base-content border-none mx-2`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      </li>
    );
  });

  const showPrevLink = currentPage > 1;
  const showNextLink = currentPage < totalPages;

  let firstEllipsis = null;
  let lastEllipsis = null;

  if (startLink > 2) {
    firstEllipsis = (
      <li>
        <span className="mx-2">...</span>
      </li>
    );
  }
  if (endLink < totalPages - 1) {
    lastEllipsis = (
      <li>
        <span className="mx-2">...</span>
      </li>
    );
  }

  const showFirstPage = startLink > 1;
  const showLastPage = endLink < totalPages;

  return (
    <nav className=" h-full  bg-white mx-auto border   p-2 rounded-md">
      <ul className="flex pl-0 rounded list-none flex-wrap items-center">
        {showPrevLink && (
          <li>
            <button
              className="btn btn-circle btn-sm rounded-full bg-white border border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 mr-1"
              onClick={() => onPageChange(currentPage - 1)}
            >
              &laquo;
            </button>
          </li>
        )}
        {showFirstPage && (
          <li>
            <button
              className="btn btn-circle bg-slate-200 hover:bg-slate-300 text-base-content border-none mx-2"
              onClick={() => onPageChange(1)}
            >
              1
            </button>
          </li>
        )}
        {firstEllipsis}
        {pageLinks}
        {lastEllipsis}
        {showLastPage && (
          <li>
            <button
              className="btn btn-circle bg-slate-200 hover:bg-slate-300 text-base-content border-none mx-2"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </li>
        )}
        {showNextLink && (
          <li>
            <button
              className="btn btn-circle btn-sm rounded-full bg-white border border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-100  ml-1"
              onClick={() => onPageChange(currentPage + 1)}
            >
              &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
