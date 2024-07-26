import React from "react";
import "./Touchstone.css";
import Navbar from "../../../components/navBar/Navbar.jsx";
import { Link } from "react-router-dom";

function Touchstone() {
  return (
    <div className="project">
      <div className="project-touchstone">
        <div className="project-touchstone-image">
          <img
            className="project-image"
            src="https://i.imgur.com/IU5D58Q.jpg"
          />
        </div>
        <h2 className="project-touchstone-title">Touchstone</h2>
        <div className="skill-sec">
          <p className="solo-skills" id="touchstone-solo-skills">
            Javascript
          </p>
          <p className="solo-skills" id="touchstone-solo-skills">
            CSS
          </p>
          <p className="solo-skills" id="touchstone-solo-skills">
            React
          </p>
        </div>
        <div className="project-overview">
          <h3 id="project-overview-title"> Overview</h3>
          <p>
            Explore Braille with TouchStone, a learning app tailored for
            individuals experiencing vision loss and those curious about
            Braille. Our platform offers a user-friendly interface and engaging
            quizzes all while incorporating Gemini AI to answer any query about
            Braille questions/translations.
          </p>
        </div>
        <div className="project-contribution">
          <h3 id="project-contribution-title">My Contributions</h3>
          <p>
            I worked closely with our UX team and personally created the front
            end structure and all components to help the team maintain
            uniformity through the app. This supported menus, search bar
            functionality, visual rendering capabilities, as well as the
            internal file structure to connect across the app.
          </p>
        </div>
        <div className="project-links">
          <Link
            className="project-link"
            to="https://github.com/CodingDos/TouchStone"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="project-link"
            to="https://devpost.com/software/braille-lcz7dt"
            target="_blank"
          >
            Hackathon
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Touchstone;
