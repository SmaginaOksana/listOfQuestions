import arrow_back from "@shared/assets/arrow_back.svg";
import arrow_next from "@shared/assets/arrow_next.svg";

import "./PaginationSection.scss";

function Pagination({ dataLength, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(dataLength / 10);

  const getPagination = (currentPage, totalPages, delta = 2) => {
    if (totalPages <= 1) return [1];

    const start = Math.max(2, currentPage - delta);
    const end = Math.min(totalPages - 1, currentPage + delta);

    const pages = [];
    pages.push(1);

    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pagination = getPagination(currentPage, totalPages);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currPage) => currPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currPage) => currPage - 1);
    }
  };
  const handleSetPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <img src={arrow_back} alt="arrow_back" />
      </button>

      {pagination.map((page, index) =>
        page === "..." ? (
          <span key={index}>...</span>
        ) : (
          <button
            key={index}
            onClick={() => handleSetPage(page)}
            className={
              page === currentPage ? "activePage pageNumber" : "pageNumber"
            }
            disabled={page === currentPage}
          >
            {page}
          </button>
        )
      )}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <img src={arrow_next} alt="arrow_next" />
      </button>
    </div>
  );
}

export default Pagination;
