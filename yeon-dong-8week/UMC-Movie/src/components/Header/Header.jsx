import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLeftWrap,
  HeaderRightWrap,
  HeaderNavItem,
  MobileNavBar,
  MobileMenu
} from "./Header.style";
import AuthContext from "../AuthContext/AuthContext.jsx";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLeftWrap>
            <Link to='/'>
              UMC Movie
            </Link>
          </HeaderLeftWrap>
          <MobileNavBar onClick={handleMenuToggle}>
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)' }}></span>
            <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)' }}></span>
          </MobileNavBar>
          <HeaderRightWrap>
            <ul>
              {isLoggedIn ? (
                <li>
                  <HeaderNavItem onClick={logout}>
                    로그아웃
                  </HeaderNavItem>
                </li>
              ) : (
                <>
                  <li>
                    <HeaderNavItem to='/signup'>회원가입</HeaderNavItem>
                  </li>
                  <li>
                    <HeaderNavItem to='/login'>로그인</HeaderNavItem>
                  </li>
                </>
              )}
              <li>
                <HeaderNavItem to='/now'>
                  Now Playing
                </HeaderNavItem>
              </li>
              <li>
                <HeaderNavItem to='/popular'>
                  Popular
                </HeaderNavItem>
              </li>
              <li>
                <HeaderNavItem to='/top'>
                  Top Rated
                </HeaderNavItem>
              </li>
              <li>
                <HeaderNavItem to='/coming'>
                  Upcoming
                </HeaderNavItem>
              </li>
            </ul>
          </HeaderRightWrap>
          <MobileMenu open={menuOpen}>
            {isLoggedIn ? (
              <HeaderNavItem onClick={logout}>
                로그아웃
              </HeaderNavItem>
            ) : (
              <>
                <HeaderNavItem to='/signup' onClick={handleMenuClose}>회원가입</HeaderNavItem>
                <HeaderNavItem to='/login' onClick={handleMenuClose}>로그인</HeaderNavItem>
              </>
            )}
            <HeaderNavItem to='/now' onClick={handleMenuClose}>
              Now Playing
            </HeaderNavItem>
            <HeaderNavItem to='/popular' onClick={handleMenuClose}>
              Popular
            </HeaderNavItem>
            <HeaderNavItem to='/top' onClick={handleMenuClose}>
              Top Rated
            </HeaderNavItem>
            <HeaderNavItem to='/coming' onClick={handleMenuClose}>
              Upcoming
            </HeaderNavItem>
          </MobileMenu>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
}

export default Header;
