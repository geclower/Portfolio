import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function navbar() {
  


  return (
    <div className="navbar">
      
      <nav className="nav">
        <Link to="/" className="navLink" id="homeNav">
          <img id="homeIcon" src="https://i.imgur.com/m16jYp0.png"/>
        </Link>
        <Link to="/projects" className="navLink" id="projectNav">
        <img id="projectIcon" src="https://i.imgur.com/vqTtA0b.png"/>
        </Link>
        <Link to="/about" className="navLink" id="aboutNav">
        <img id="aboutIcon" src="https://i.imgur.com/h7gmnga.png"/>
        </Link>

        <div  className="navLink" id="mailNav" onClick={(e) => {window.location.href ='mailto:clower.grace@gmail.com';}}><img id="mailIcon" src="https://i.imgur.com/CQVjnKf.png"/></div>
        
      </nav>
    </div>
  );
}

export default navbar;
