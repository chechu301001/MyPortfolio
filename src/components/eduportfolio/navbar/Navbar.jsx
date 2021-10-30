import React from "react";
import { HashLink as Link} from 'react-router-hash-link'
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <NavLink exact className="edu-navbar-brand" to="/eduportfolio">
                  Education<span className="sub">Portfolio</span>
                </NavLink>
                <button 
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav mt-0 mt-lg-1 ms-auto">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="btn btn-secondary nav-back"
                        aria-current="page"
                        to="/">
                        Back Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        smooth
                        to="#about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        smooth
                        to="#projects">
                        Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        to="contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
