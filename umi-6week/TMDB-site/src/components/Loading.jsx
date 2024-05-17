//eslint-disable-next-line
import React from "react";
import styled from "styled-components";
import Rolling from "../assets/rolling.gif";

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  color: color;
  margin-top: 12px;
`;

function Loading() {
  return (
    <Background>
      <img src={Rolling} alt="Loading..." width="5%" />
      <Text>Loading...</Text>
    </Background>
  );
}

export default Loading;
