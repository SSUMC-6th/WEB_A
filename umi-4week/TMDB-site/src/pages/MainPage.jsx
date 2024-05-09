//eslint-disable-next-line
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 200px;
  text-align: center;
  color: white;
`;

const Banner = styled.div`
  width: 100vw;
  height: 100px;
`;

const HeadText = styled.h1``;

const SearchArea = styled.div`
  width: 100vw;
`;

const SearchContainer = styled.div`
  display: flex;
  width: fit-content;
  position: absolute;
  margin-top: 24px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SearchBar = styled.div`
  width: 36vw;
  height: 50px;
  background-color: white;
  border-radius: 999px;
`;

const SearchIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: gold;
  border-radius: 999px;
  margin-left: 12px;
  margin-top: 5px;
`;

function MainPage() {
  return (
    <Wrapper>
      <Banner>
        <HeadText>환영합니다</HeadText>
      </Banner>
      <SearchArea>
        <HeadText>🎥 Find you movies !</HeadText>
        <SearchContainer>
          <SearchBar></SearchBar>
          <SearchIcon></SearchIcon>
        </SearchContainer>
      </SearchArea>
    </Wrapper>
  );
}

export default MainPage;
