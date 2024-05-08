import { Link } from "react-router-dom"
import {
    HeaderContainer,
    HeaderWrap,
    HeaderLeftWrap,
    HeaderRightWrap,
    HeaderNavItem,
    LoginButton
  } from "./Header.style"
  import React, { useState } from 'react';

function Header() {
  const [loginstatus, setLoginStatus] = useState(false);

  const loginClick = () =>{
    setLoginStatus(!loginstatus);
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
            <HeaderRightWrap>
              <ul>
                <li>
                  <LoginButton onClick={loginClick}>
                    {loginstatus ? "로그아웃" : "로그인"}
                  </LoginButton>
                </li>
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
    )
  }
  
  export default Header
  