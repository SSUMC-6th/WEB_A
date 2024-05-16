//eslint-disable-next-line
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: #222;
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
  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 30px;
    }
  }
`;

const NavItem = styled(NavLink)`
  &:hover {
    font-size: 18px;
    cursor: pointer;
  }
`;

function Navbar() {
  return (
    <Header>
      <Contents>
        <div>
          <NavItem
            to="/"
            style={({ isActive }) => ({ color: isActive ? "white" : "white" })}
          >
            UMC Movie
          </NavItem>
        </div>

        <Nav>
          <ul>
            <NavItem to="/signup">
              <li>회원가입</li>
            </NavItem>
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
        </Nav>
      </Contents>
    </Header>
  );
}

export default Navbar;
