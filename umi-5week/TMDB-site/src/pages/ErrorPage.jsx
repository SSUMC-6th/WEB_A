// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  position: absolute;
  text-align: center;
  margin-top: 24px;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const Oops = styled.h1`
  color: white;
`;

const ErrorMessage = styled.h4`
  color: white;
`;

const NotFound = styled.h4`
  color: white;
  font-style: italic;
`;

const MainLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;
`;

function ErrorPage() {
  return (
    <Container>
      <Oops>Ooops!</Oops>
      <ErrorMessage>예상치 못한 에러가 발생했습니다...</ErrorMessage>
      <NotFound>Not Found</NotFound>
      <MainLink href="/">메인으로 이동하기</MainLink>
    </Container>
  );
}

export default ErrorPage;
