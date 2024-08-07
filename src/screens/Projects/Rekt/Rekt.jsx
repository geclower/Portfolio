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
            src="https://i.imgur.com/pnwr40r.png"
            alt="project preview"
          />
        </div>
        <div class="gradient" id="gradient-rekt"></div>
        <div className="project-links-rekt">
          <Link
            className="project-link-rekt"
            to="https://github.com/jbourke16/team-rekt-frontend"
            target="_blank"
          >
            GitHub - Frontend
          </Link>
          <Link
            className="project-link-rekt"
            to="https://github.com/jbourke16/team-rekt-backend"
            target="_blank"
          >
            GitHub - Backend
          </Link>
          <Link
            className="project-link-rekt"
            to="https://rekt-api.netlify.app/"
            target="_blank"
          >
            Live
          </Link>
        </div>
        <div className="project-rekt-bio">
        <h2 className="project-rekt-title">REK'T</h2>
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
       
        <div className="project-overview-rekt">
          <h3 id="project-overview-title-rekt"> Overview</h3>
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
        <div className="project-contribution-rekt">
          <h3 id="project-contribution-title-rekt">My Contributions</h3>
          <p>
            I was instrumental in maintaining and updating the back-end routes
            through MongoDB as our project grew. I also was fully responsible
            for creating functionality that allows users to comment, track, and
            edit reviews on games through the use of JavaScript, React, and
            Node.js.
          </p>
        </div>
        </div>
        <div className="project-rekt-screens">
          <img
            className="project-screen-large-rekt"
            src="https://i.imgur.com/NJ26PnH.png"
            alt="project preview"
          />
          <img
            className="project-screen-small-rekt"
            src="https://i.imgur.com/tzzHXWw.png"
            alt="project preview"
          />
          <img
            className="project-screen-small-rekt"
            src="https://i.imgur.com/nKU4sjE.png"
            alt="project preview"
          />
        </div>
        
      </div>
      <Navbar />
    </div>
  );
}

export default Rekt;
