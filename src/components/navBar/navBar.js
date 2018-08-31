import React from "react";
import "./navBar.css";

const NavBar = props => (
  <nav className="navbar navbar-expand-md sticky-top justify-content-between">
  <div className="container">
      <h1>Kris Acker Bierma</h1>

      <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navColl" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="fal fa-bars fa"></i></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navColl">
          <ul className="nav navbar-nav text-right float-right pr-3">
              <li className="nav-item">
                  <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="pipe"> | </li>
              <li className="nav-item">
                  <a className="nav-link" href="#building_things">Building Things / Bio</a>
              </li>
              <li className="pipe"> | </li>
              <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
              </li>
          </ul>
      </div>
  </div>
</nav>  
);

export default NavBar;