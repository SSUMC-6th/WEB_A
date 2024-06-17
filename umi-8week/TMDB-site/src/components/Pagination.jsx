// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -56px;
`;

const CurrentPage = styled.div`
  width: 40px;
  color: white;
  font-size: 20px;
  text-align: center;
  margin-top: 9px;
`;

const PageButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #999;
  border-radius: 999px;
  border: none;
  margin: 0px 12px 50px 12px;
  margin-bottom: 50px;
  text-align: center;
`;

// eslint-disable-next-line react/prop-types
function Pagination({ currentPage, goToPrevPage, goToNextPage }) {
  return (
    <>
      <PageContainer>
        <PageButton onClick={goToPrevPage} disabled={currentPage === 1}>
          ＜
        </PageButton>
        <CurrentPage>{currentPage}</CurrentPage>
        <PageButton onClick={goToNextPage} disabled={currentPage === 5}>
          ＞
        </PageButton>
      </PageContainer>
    </>
  );
}

export default Pagination;
