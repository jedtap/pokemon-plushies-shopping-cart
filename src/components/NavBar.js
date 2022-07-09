import React from "react";
import '../styles/NavBar.css';
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (<>
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/">Poke-plushies</a>

        <div className="navbar-collapse">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Shop</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About us</a>
            </li>

          </ul>
        </div>

        </div>
    </nav>
  </>);
};

export default NavBar;