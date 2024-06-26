// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import PlayList from "../components/PlayList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function MainPage() {
  return (
    <>
      <Container>
        <NavBar />
        <PlayList />
      </Container>
    </>
  );
}

export default MainPage;
