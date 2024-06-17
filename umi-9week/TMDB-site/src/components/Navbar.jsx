//eslint-disable-next-line
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "./UserData";
import { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: black;
  // backdrop-filter: blur(10px);
`;

const Contents = styled.div`
  display: flex;
  width: 96%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  position: relative;
  backdrop-filter: blur(10px);
  ul {
    display: flex;
    gap: 24px;
    list-style: none;
  }

  @media only screen and (max-width: 768px) {
    ul {
      display: ${(props) => (props.menuToggle ? "flex" : "none")};
      flex-direction: column;
      position: fixed;
      top: 32px;
      right: -14px;
      width: 250px;
      height: 100vh;
      padding-top: 24px;
      background-color: black;
    }
  }
`;

const Logo = styled(NavLink)`
  font-weight: 900;
`;

const NavItem = styled(NavLink)`
  transition: font-size 0.5s;
  &:hover {
    font-size: 18px;
    cursor: pointer;
  }
`;

const HamburgerMenu = styled.button`
  border: 0;
  background-color: transparent;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [menuToggle, setMenuToggle] = useState(false);

  const menuOnOff = () => {
    setMenuToggle((menuToggle) => !menuToggle);
  };

  return (
    <Header>
      <Contents>
        <div>
          <Logo
            to="/"
            style={({ isActive }) => ({ color: isActive ? "white" : "white" })}
          >
            SMUFLIX
          </Logo>
        </div>

        <Nav menuToggle={menuToggle}>
          <ul>
            {isLoggedIn ? (
              <>
                <NavItem onClick={logout}>
                  <li>Log Out</li>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem to="/login">
                  <li>Log In</li>
                </NavItem>
                <NavItem to="/signup">
                  <li>Sign Up</li>
                </NavItem>
              </>
            )}
            <NavItem to="/popular">
              <li>Popular</li>
            </NavItem>
            <NavItem to="/nowplaying">
              <li>Now Playing</li>
            </NavItem>
            <NavItem to="/toprated">
              <li>Top Rated</li>
            </NavItem>
            <NavItem to="/upcoming">
              <li>Upcoming</li>
            </NavItem>
          </ul>
          <HamburgerMenu onClick={menuOnOff}>
            {menuToggle ? (
              <BsXLg style={{ color: "white" }} size="32px" />
            ) : (
              <BsList style={{ color: "white" }} size="32px" />
            )}
          </HamburgerMenu>
        </Nav>
      </Contents>
    </Header>
  );
}

export default Navbar;
