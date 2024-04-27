import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <header className='header'>
        <div className='contents'>
          <div>
            <NavLink to='/popular'>UMC Movie</NavLink>
          </div>

          <nav className='navigation'>
            <ul>
              <NavLink to='/'><li>회원가입</li></NavLink>
              <NavLink to='/popular'><li>Popular</li></NavLink>
              <NavLink to='/nowplaying'><li>Now Playing</li></NavLink>
              <NavLink to='/toprated'><li>Top Rated</li></NavLink>
              <NavLink to='/upcoming'><li>Upcoming</li></NavLink>
            </ul>
          </nav>
        </div>
      </header> 
    );
}

export default Navbar;