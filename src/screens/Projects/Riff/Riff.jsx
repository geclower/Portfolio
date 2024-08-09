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
            alt="project preview"
            src="https://i.imgur.com/uuWFzD7.png"
          />
        </div>
        <div class="gradient" id="gradient-riff"></div>
        <div className="project-links-riff">
          <Link
            className="project-link-riff"
            to="https://github.com/jwow1000/front-end-riff"
            target="_blank"
          >
            GitHub - Frontend
          </Link>
          <Link
            className="project-link-riff"
            to="https://github.com/jbourke16/team-rekt-backend"
            target="_blank"
          >
            GitHub - Backend
          </Link>
        </div>
        <div className="project-riff-bio">
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
            <p className="solo-skills" id="riff-solo-skills">
              RESTful Routing
            </p>
          </div>

          <div className="project-overview-riff">
            <h3 id="project-overview-title-riff"> Overview</h3>
            <p>
              Riff serves as a dedicated space for artists to connect,
              collaborate, and innovate. By harnessing the power of collective
              creativity, Riff empowers users to explore diverse perspectives
              and create compelling art together. Riff is a platform designed to
              facilitate collaboration among artists and enable crowd-sourced
              art creation. With Riff, users can engage in a dynamic creative
              process, contributing to and enhancing each other's work through
              threaded comments associated with individual posts.
            </p>
          </div>
          <div className="project-contribution-riff">
            <h3 id="project-contribution-title-riff">My Contributions</h3>
            <p>
              I was instrumental in building and implementing a fully flexible
              Django backend. This site focuses on artist collaboration by using
              previous artists' posted work and expanding on them. I customized
              our back end to allow for a recursive threaded comment structure
              allowing users to comment on any picture posted, leading to a tree
              like organization of expanding art.
            </p>
          </div>
        </div>
        <div className="project-riff-screens">
          <img
            className="project-screen-large-riff"
            src="https://i.imgur.com/FTZkhQK.png"
            alt="project preview"
          />
          <img
            className="project-screen-small-riff"
            src="https://i.imgur.com/12o4VWw.png"
            alt="project preview"
          />
          <img
            className="project-screen-small-riff"
            src="https://i.imgur.com/crVTQsq.png"
            alt="project preview"
          />
          <img
            className="project-screen-large-riff"
            src="https://i.imgur.com/7czOt5B.png"
            alt="project preview"
          />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Riff;
