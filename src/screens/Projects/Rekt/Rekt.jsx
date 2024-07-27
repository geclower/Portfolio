import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navBar/Navbar";
import "./Rekt.css";

function Rekt() {
  return (
    <div className="project">
      <div className="project-rekt">
        <div className="project-rekt-image">
          <img
            className="project-image"
            src="https://i.imgur.com/IU5D58Q.jpg"
          />
        </div>
        <h2 className="project-rekt-title">Rek't</h2>
        <div className="skill-sec">
          <p className="solo-skills" id="rekt-solo-skills">
            MongoDB
          </p>
          <p className="solo-skills" id="rekt-solo-skills">
            Express
          </p>
          <p className="solo-skills" id="rekt-solo-skills">
            React
          </p>
          <p className="solo-skills" id="rekt-solo-skills">
            Node.js
          </p>
        </div>
        <div class="gradient" id="gradient-rekt"></div>
        <div className="project-overview">
          <h3 id="project-overview-title"> Overview</h3>
          <p>
            REK'T is a social gaming platform that connects passionate gamers,
            allowing them to explore, review, and share their love of their
            favorite games. It's like Rotten Tomatoes or Letterboxd, but for
            games (and arguably, better)! With REK'T, you can browse games as a
            guest or you can sign up so you can favorite games and leave
            reviews. If your heart desires, you can unfavorite a game or delete
            or edit a review.
          </p>
        </div>
        <div className="project-contribution">
          <h3 id="project-contribution-title">My Contributions</h3>
          <p>
            I was instrumental in maintaining and updating the back-end routes
            through MongoDB as our project grew. I also was fully responsible
            for creating functionality that allows users to comment, track, and
            edit reviews on games through the use of JavaScript, React, and
            Node.js.
          </p>
        </div>
        <div className="project-links">
          <Link
            className="project-link"
            to="https://github.com/jbourke16/team-rekt-frontend"
            target="_blank"
          >
            GitHub - Frontend
          </Link>
          <Link
            className="project-link"
            to="https://github.com/jbourke16/team-rekt-backend"
            target="_blank"
          >
            GitHub - Backend
          </Link>
          <Link
            className="project-link"
            to="https://rekt-api.netlify.app/"
            target="_blank"
          >
            Live
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Rekt;
