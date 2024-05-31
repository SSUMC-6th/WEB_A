// eslint-disable-next-line no-unused-vars
import React from "react";
import TmdbData from "../components/TmdbData";
import Pagination from "../components/Pagination";
import { useState } from "react";

function PopularPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  return (
    <>
      <TmdbData apiType="popular" currentPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </>
  );
}

export default PopularPage;
