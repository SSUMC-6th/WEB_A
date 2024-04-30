import { Link } from "react-router-dom"

function Header() {

    return (
      <>
        <div className="header-container">
          <div className="header-wrap">
            <div className="header-left-wrap">
                <Link to='/'>
                  UMC Movie
                </Link>
            </div>
            <div className="header-right-wrap">
              <ul>
                <li>
                  <Link className="header-nav-item" to='/now'>
                    Now Playing
                  </Link>
                </li>
                <li>
                  <Link className="header-nav-item" to='/popular'>
                    Popular
                  </Link>
                </li>
                <li>
                  <Link className="header-nav-item" to='/top'>
                    Top Rated
                  </Link>
                </li>
                <li>
                  <Link className="header-nav-item" to='/coming'>
                    Upcoming
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Header
  