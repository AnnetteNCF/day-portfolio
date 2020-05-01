import React from "react";
import '../header/header.css'
// import Dropdown from '../components/Dropdown.js';


function Header() {
 return (
      <React.Fragment>
        <nav>
            {/* <div className="spacer" /> */}
            <h1 className="nav-logo">day.</h1>
            {/* <div className="spacer" /> */}
            <div className="nav-links">
              <ul>
                <li>
                  <a className="nav-links-individual" href="/">home</a>
                </li>
                <li>
                 <a className="nav-links-individual" href="projects">projects</a>
                </li>
                <li>
                  <a className="nav-links-individual" href="about">about</a>
                </li>
              </ul>
            </div>
        </nav>
      </React.Fragment>
    )
  }

export default Header;
