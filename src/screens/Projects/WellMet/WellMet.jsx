import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navBar/Navbar";
import "./WellMet.css";

function WellMet() {
  return (
    <div className="project">
      <div className="project-wellmet">
        <div className="project-wellmet-image">
          <img
            className="project-image"
            src="https://i.imgur.com/bSm34Em.png"
            alt="project preview"
          />
        </div>
        <div class="gradient" id="gradient-wellmet"></div>
        <div className="project-links-wm">
          <Link
            className="project-link-wellmet"
            to="https://github.com/geclower/WellMet"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="project-link-wellmet"
            to="https://well-met.netlify.app/"
            target="_blank"
          >
            Live
          </Link>
        </div>
        <div className="project-wellmet-bio">
          <h2 className="project-wellmet-title">Well Met!</h2>
          <div className="skill-sec">
            <p className="solo-skills" id="wellmet-solo-skills">
              Javascript
            </p>
            <p className="solo-skills" id="wellmet-solo-skills">
              JSON
            </p>
            <p className="solo-skills" id="wellmet-solo-skills">
              React
            </p>
            <p className="solo-skills" id="wellmet-solo-skills">
              CSS
            </p>
          </div>

          <div className="project-overview-wm">
            <h3 id="project-overview-title-wm"> Overview</h3>
            <p>
              Have you ever wanted to visit The Met but don't live in New York
              (or can't be bothered to go to the Upper East Side)? Welcome to
              Well Met! A virtual walkthrough of all public domain art available
              through The Met API. Users have the option to select their
              preferred department and browse through a comprehensive collection
              of items within the public domain.
            </p>
          </div>
          <div className="project-contribution-wm">
            <h3 id="project-contribution-title-wm">My Contributions</h3>
            <p>
              For this project I connected to The Met API and customized all
              routes to prevent non-public domain pulls. I created a flexible
              viewing page for all available art pieces based on user chosen
              departments or random selection. Each art piece is accompanied by
              an informative tag including the title, the artist's name, the era
              or year of creation, and a link to The Met's dedicated page on the
              item in case the user is looking for further information.
            </p>
          </div>
        </div>
        <div className="project-wellmet-screens">
          <img
            className="project-screen-large-wm"
            src="https://i.imgur.com/typnhdp.png"
            alt="project preview"
          />
          <img
            className="project-screen-small-wm"
            src="https://i.imgur.com/UYsrgEs.png"
            alt="project preview"
          />
          <img
            className="project-screen-small-wm"
            src="https://i.imgur.com/MuCsgkS.png"
            alt="project preview"
          />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default WellMet;
