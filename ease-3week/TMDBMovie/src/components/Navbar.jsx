import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
    <div className="NavbarContainer">
        <div className="logo">
            <Link to='/'>
                <div className="logoContent">UMC Movie</div>
            </Link>
        </div>
        <div className="Navbar">
            <Link className="Navbar-menu" to="/popular">
                Popular
            </Link>
            <Link className="Navbar-menu" to="nowplaying">
                Now Playing
            </Link>
            <Link className="Navbar-menu" to="toprated">
                Top Rated
            </Link>
            <Link className="Navbar-menu" to="upcoming">
                Upcoming
            </Link>
        </div>
    </div>
    )
}
  
  export default Navbar