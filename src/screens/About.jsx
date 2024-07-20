import React from "react";
import "./StyleSheets/About.css";
import Navbar from "../components/navBar/Navbar";

function About() {
  return (
    <div className="aboutPage">
      <div id="profileCard">
        <img id="profilePic" src="https://i.imgur.com/IU5D58Q.jpg" />
        <h2 id="profileName">Grace Clower</h2>
        <p id="profileMiniBio">
          Software developer and artist who loves problem solving and finding
          creative solutions to complex problems and projects.{" "}
        </p>
        <div id="buttonBar">
        <i class="fa fa-linkedin-square" ></i>
          <button className="profileButtons" id="linkedInButton">
          <i class="fa fa-linkedin-square" ></i>
          </button>
          <button className="profileButtons" id="gitHubButton">
            Github
          </button>
          <button className="profileButtons" id="instaButton">
            Insta
          </button>
          <button className="profileButtons" id="emailButton">
            Email
          </button>
        </div>
      </div>
      <div className="aboutSection">
        <h1>Bio</h1>
        <h2>Skills</h2>
        <h3>Experience</h3>
      </div>
      <Navbar />
    </div>
  );
}

export default About;
