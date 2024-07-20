import React from "react";
import "./profileCard.css";

import { Link } from "react-router-dom";

function profileCard() {


  return (
    <div id="profileCard">
      <img id="profilePic" src="https://i.imgur.com/IU5D58Q.jpg" />
      <h2 id="profileName">Grace Clower</h2>
      <p id="profileMiniBio">
        Software developer and artist who loves problem solving and finding
        creative solutions to complex problems and projects.{" "}
      </p>
      <div id="buttonBar">
        
        <Link className="profileButtons" id="gitHubButton" to="https://github.com/geclower" target="_blank">
          <img
            id="gitHubIcon"
            src="https://cdn.iconscout.com/icon/free/png-256/free-github-brand-logo-47401.png?f=webp&w=256"
          />
        </Link>
        <Link className="profileButtons" id="linkedInButton" to="https://www.linkedin.com/in/grace-clower/" target="_blank">
          <img
            id="linkedInIcon"
            src="https://i.imgur.com/DGgA31Q.png"
          />
        </Link>
        <Link className="profileButtons" id="instaButton" to="https://www.instagram.com/g.ellen/" target="_blank">
          <img
            id="instaIcon"
            src="https://cdn.iconscout.com/icon/free/png-256/free-social-137-95498.png"
          />
        </Link>
        <Link
          className="profileButtons"
          id="emailButton"
          onClick={(e) => {
            window.location.href = "mailto:clower.grace@gmail.com";
          }}
        >
          <img id="mailIcon" src="https://i.imgur.com/CQVjnKf.png" />
        </Link>
      </div>
    </div>
  );
}

export default profileCard;
