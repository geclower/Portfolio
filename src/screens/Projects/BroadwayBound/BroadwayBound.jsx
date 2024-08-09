import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navBar/Navbar";
import "./BroadwayBound.css";

function BroadwayBound() {
  return (
    <div className="project">
      <div className="project-bwaybound">
        <div className="project-bwaybound-image">
          <img
            className="project-image"
            src="https://i.imgur.com/dzoZa8Y.png"
          />
        </div>
        <div class="gradient" id="gradient-bwaybound"></div>
        <div className="project-links-bb">
          <Link
            className="project-link-bwaybound"
            to="https://github.com/geclower/BroadwayAPI"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
        <div className="project-bwaybound-bio">
          <h2 className="project-bwaybound-title">Broadway Bound</h2>
          <p className="in-progress">**In Progress**</p>
          <div className="skill-sec">
            <p className="solo-skills" id="bwaybound-solo-skills">
              MongoDB
            </p>
            <p className="solo-skills" id="bwaybound-solo-skills">
              Express
            </p>
            <p className="solo-skills" id="bwaybound-solo-skills">
              React
            </p>
            <p className="solo-skills" id="bwaybound-solo-skills">
              Node.js
            </p>
          </div>

          <div className="project-overview-bb">
            <h3 id="project-overview-title-bb"> Overview</h3>
            <p>
              It can be so hard to know what show to go see. What's running?
              What's closing soon? What is the cheapest ticket I can get?
              Broadway Bound is your one stop shop API for all currently running
              broadway shows. This API will be updated about once a week.
            </p>
          </div>
          <div className="project-contribution-bb">
            <h3 id="project-contribution-title-bb">My Contributions</h3>
            <p>
              This project is currently under development to implement the API
              to source and categorize all discounted Broadway tickets into one
              hub. <br></br>I assembled an easily navigable database with full
              CRUD accessibility. I allowed for a wide range of potential
              requests including: shows that are closing, musicals or plays,
              shows without and intermission, etc. I personally collected all
              the info for each show and personally update the info about once a
              week.
            </p>
          </div>
        </div>
        <div className="project-bwaybound-screens">
          <img
            className="project-screen-large-bb"
            src="https://i.imgur.com/t3X97Wj.png"
          />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default BroadwayBound;
