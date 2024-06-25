// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { CartIcon } from "../constants/icon";
import { useSelector } from "react-redux";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 20vw;
  align-items: center;
  background-color: #111;
`;

const Logo = styled.div`
  color: white;
  font-weight: 400;
  font-size: 22px;
`;

const Albums = styled.div`
  position: absolute;
  top: 13px;
  right: 19vw;
  width: 24px;
  height: 18px;
  background-color: #1abc54;
  color: black;
  border-radius: 999px;
  text-align: center;
  padding-top: 4px;
  font-size: 14px;
  font-weight: 600;
`;

const Cart = styled.div`
  width: 28px;
  color: white;
`;

const NavBar = () => {
  const { totalAlbums } = useSelector((state) => state.cart);

  return (
    <>
      <NavContainer>
        <Logo>UMC Playlist</Logo>
        <Albums>{totalAlbums}</Albums>
        <Cart>
          <CartIcon />
        </Cart>
      </NavContainer>
    </>
  );
};

export default NavBar;
