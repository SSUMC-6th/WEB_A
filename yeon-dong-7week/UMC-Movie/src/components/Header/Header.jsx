import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLeftWrap,
  HeaderRightWrap,
  HeaderNavItem
} from "./Header.style";
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext.jsx";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLeftWrap>
            <Link to='/'>
              UMC Movie
            </Link>
          </HeaderLeftWrap>
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
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
}

export default Header;
