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
                    now
                  </Link>
                </li>
                <li>
                  <Link className="header-nav-item" to='/popular'>
                    pop
                  </Link>
                </li>
                <li>
                  <Link className="header-nav-item" to='/top'>
                    top
                  </Link>
                </li>
                <li>
                  <Link className="header-nav-item" to='/coming'>
                    coming
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
  