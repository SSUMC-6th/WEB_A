import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavItem = styled(NavLink)`
  &:hover{
    font-size: 18px;
    cursor: pointer;
  }
`

function Navbar(){
    return(
        <header className='header'>
        <div className='contents'>
          <div>
            <NavItem 
              to='/popular'
              style={({ isActive }) => ({ color: isActive ? 'white' : 'white' })}
            >
              UMC Movie</NavItem>
          </div>

          <nav className='navigation'>
            <ul>
              <NavItem to='/'><li>회원가입</li></NavItem>
              <NavItem to='/popular'><li>Popular</li></NavItem>
              <NavItem to='/nowplaying'><li>Now Playing</li></NavItem>
              <NavItem to='/toprated'><li>Top Rated</li></NavItem>
              <NavItem to='/upcoming'><li>Upcoming</li></NavItem>
            </ul>
          </nav>
        </div>
      </header> 
    );
}

export default Navbar;