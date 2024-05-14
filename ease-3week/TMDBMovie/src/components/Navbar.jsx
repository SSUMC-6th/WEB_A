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
                <div className="Navbar-content">Popular</div>
            </Link>
            <Link className="Navbar-menu" to="/nowplaying">
                <div className="Navbar-content">Now Playing</div>
            </Link>
            <Link className="Navbar-menu" to="/toprated">
                <div className="Navbar-content">Top Rated</div>
            </Link>
            <Link className="Navbar-menu" to="/upcoming">
                <div className="Navbar-content">Upcoming</div>
            </Link>
        </div>
    </div>
    )
}
  
  export default Navbar