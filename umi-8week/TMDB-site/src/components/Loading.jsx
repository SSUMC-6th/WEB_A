//eslint-disable-next-line
import React from "react";
import styled from "styled-components";
import Rolling from "../assets/rolling2.gif";

const Load = styled.div`
  width: 100vw;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Loading() {
  return (
    <Load>
      <img src={Rolling} alt="Loading..." width="4%" />
    </Load>
  );
}

export default Loading;
