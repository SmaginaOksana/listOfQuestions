import { useState } from "react";
import Pagination from "@shared/ui/Pagination/Pagination";

interface IPaginationComponentProps {
  dataLength: number;
}

function usePagination(pageLimit: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const PaginationRender = ({ dataLength }: IPaginationComponentProps) => (
    <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      dataLength={dataLength}
      pageLimit={pageLimit}
    />
  );

  return {
    currentPage,
    setCurrentPage,
    PaginationRender,
  };
}

export default usePagination;
