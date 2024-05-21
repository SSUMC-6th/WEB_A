import { Link } from "react-router-dom"
import {
    HeaderContainer,
    HeaderWrap,
    HeaderLeftWrap,
    HeaderRightWrap,
    HeaderNavItem,
    SignUpButton
  } from "./Header.style"

function Header() {

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
                  <SignUpButton to='/signup'>회원가입</SignUpButton>  
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
  