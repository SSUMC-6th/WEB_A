import React from "react";
import styled from "styled-components";
import { CartIcon } from "../constants/icon";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  align-items: center;
  background-color: black;
`;

const Logo = styled.div`
  color: white;
  font-weight: 400;
  font-size: 22px;
`;

const Cart = styled.div`
  width: 28px;
  color: white;
`;

export const NavBar = () => {
  return (
    <>
      <NavContainer>
        <Logo>UMC Playlist</Logo>
        <Cart>
          <CartIcon />
        </Cart>
      </NavContainer>
    </>
  );
};
