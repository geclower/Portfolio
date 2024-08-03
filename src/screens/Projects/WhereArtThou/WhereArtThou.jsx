import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navBar/Navbar";
import "./WhereArtThou.css";

function WhereArtThou() {
  return (
    <div className="project">
      <div className="project-whereart">
        <div className="project-whereart-image">
          <img
            className="project-image"
            src="https://i.imgur.com/IU5D58Q.jpg"
          />
        </div>
        <div class="gradient" id="gradient-whereart"></div>
        <div className="project-links">
          <Link
            className="project-link-whereart"
            to="https://geclower.github.io/Where-Art-Thou/"
            target="_blank"
          >
            Live
          </Link>
          <Link
            className="project-link-whereart"
            to="https://github.com/geclower/Where-Art-Thou"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <div className="project-whereart-bio">
          <h2 className="project-whereart-title">Where Art Thou?</h2>
          <div className="skill-sec">
            <p className="solo-skills" id="whereart-solo-skills">
              Javascript
            </p>
            <p className="solo-skills" id="whereart-solo-skills">
              HTML
            </p>
            <p className="solo-skills" id="whereart-solo-skills">
              CSS
            </p>
          </div>

          <div className="project-overview">
            <h3 id="project-overview-title"> Overview</h3>
            <p>
              The classic question... What do you want to watch tonight? Where
              Art Thou? will help you narrow down the options based on four
              parameters: What country are you in? Which streaming services do
              you have access to? TV or Movie? And what genre? The provided list
              will then link you to that TV show or movie's page on your chosen
              streaming service.
            </p>
          </div>
          <div className="project-contribution">
            <h3 id="project-contribution-title">My Contributions</h3>
            <p>
              For this site I connected to an API which provides all media
              available across streaming platforms. Imade varying JSON API fetch
              calls for all features of the application to ensure users receive
              the most consistent and up to date options. The streaming service
              is pulled based on which country you select as not all services
              are available in all countries. When you click the submit button
              the first 25 medias are listed with the link to the page of the
              streaming service automatically attached. If there are more than
              25 options a next button appears. When it is clicked the next 25
              options are added to the list. I utilized CSS and a range of media
              queries to optimize the look and feel of the user experience.
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default WhereArtThou;
