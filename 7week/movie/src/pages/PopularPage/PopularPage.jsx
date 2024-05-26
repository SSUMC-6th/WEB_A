import { useState } from "react";
import { MovieDataFetcher } from "../../components/MovieData/MovieDataFetcher";
import {
  PaginationWrapper,
  PaginationButton,
  PaginationInfo,
} from "./PopularPage.style";

export const Popular = () => {
  const apiKey = "d2cb276ab0ca7b65595d1e9a2fd4ea84";
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <MovieDataFetcher
        apiEndpoint="popular"
        apiKey={apiKey}
        language="ko-KR"
        page={currentPage}
      />
      <PaginationWrapper>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전 페이지
        </PaginationButton>
        <PaginationInfo>{currentPage}</PaginationInfo>
        <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>
          다음 페이지
        </PaginationButton>
      </PaginationWrapper>
    </div>
  );
};
