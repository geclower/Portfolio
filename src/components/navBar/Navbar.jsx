import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink
          to="/"
          className="navLink"
          id="homeNav"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#aaedd4" : "#f1f3f4",
            };
          }}
        >
          <img id="homeIcon" src="https://i.imgur.com/m16jYp0.png" />
        </NavLink>
        <NavLink
          to="/projects"
          className="navLink"
          id="projectNav"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#92DDEA" : "#f1f3f4",
            };
          }}
        >
          <img id="projectIcon" src="https://i.imgur.com/vqTtA0b.png" />
        </NavLink>
        <NavLink
          to="/about"
          className="navLink"
          id="aboutNav"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#be9ddf" : "#f1f3f4",
            };
          }}
        >
          <img id="aboutIcon" src="https://i.imgur.com/h7gmnga.png" />
        </NavLink>

        <div
          className="navLink"
          id="mailNav"
          onClick={(e) => {
            window.location.href = "mailto:clower.grace@gmail.com";
          }}
        >
          <img id="mailIcon" src="https://i.imgur.com/CQVjnKf.png" />
        </div>
      </nav>
    </div>
  );
}

export default navbar;
