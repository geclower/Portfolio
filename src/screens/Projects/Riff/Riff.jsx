import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navBar/Navbar";
import "./Riff.css";

function Riff() {
  return (
    <div className="project">
      <div className="project-riff">
        <div className="project-riff-image">
          <img
            className="project-image"
            src="https://i.imgur.com/IU5D58Q.jpg"
          />
        </div>
        <h2 className="project-riff-title">[RIFF]</h2>
        <div className="skill-sec">
          <p className="solo-skills" id="riff-solo-skills">
            Django
          </p>
          <p className="solo-skills" id="riff-solo-skills">
            Python
          </p>
          <p className="solo-skills" id="riff-solo-skills">
            PostgreSQL
          </p>
        </div>
        <div class="gradient" id="gradient-riff"></div>
        <div className="project-overview">
          <h3 id="project-overview-title"> Overview</h3>
          <p>
            Riff serves as a dedicated space for artists to connect,
            collaborate, and innovate. By harnessing the power of collective
            creativity, Riff empowers users to explore diverse perspectives and
            create compelling art together. Riff is a platform designed to
            facilitate collaboration among artists and enable crowd-sourced art
            creation. With Riff, users can engage in a dynamic creative process,
            contributing to and enhancing each other's work through threaded
            comments associated with individual posts.
          </p>
        </div>
        <div className="project-contribution">
          <h3 id="project-contribution-title">My Contributions</h3>
          <p>
            I was instrumental in building and implementing a fully flexible
            Django backend. This site focuses on
            artist collaboration by using previous artists' posted work and
            expanding on them. I customized our back end to allow for a
            recursive threaded comment structure allowing users to comment on
            any picture posted, leading to a tree like organization of expanding
            art.
          </p>
        </div>
        <div className="project-links">
          <Link
            className="project-link"
            to="https://github.com/jwow1000/front-end-riff"
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
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Riff;
