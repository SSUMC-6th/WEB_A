//eslint-disable-next-line
import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 60px;
  backdrop-filter: blur(10px);
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

function Navbar() {
  const navigate = useNavigate();
  // const [isLogIn, setIsLogIn] = useState(false);
  let token = localStorage.getItem("token");

  // eslint-disable-next-line no-undef
  useEffect(() => {
    fetch(`http://localhost:8080/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    // .then(() => setIsLogIn(true))
    // .then(() => console.log(isLogIn));
  }, [token]);

  const onLogout = () => {
    // setIsLogIn(false);
    localStorage.clear();
    navigate("/");
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

        <Nav>
          <ul>
            {token ? (
              <>
                <NavItem onClick={onLogout}>
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
        </Nav>
      </Contents>
    </Header>
  );
}

export default Navbar;
