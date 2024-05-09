//eslint-disable-next-line
import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  // height: 20px;
  background-color: #222;
  color: white;
`;

const FootText = styled.div`
  float: right;
  padding: 8px;
`;

function Footer() {
  return (
    <Background>
      <FootText>https://www.themoviedb.org</FootText>
    </Background>
  );
}

export default Footer;
