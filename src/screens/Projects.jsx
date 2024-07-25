import React from "react";
import "./StyleSheets/Projects.css";
import Navbar from "../components/navBar/Navbar.jsx";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <Link to="/projects/touchstone" className="project-preview" id="touchstone">
      <img className="preview-pic" src="https://i.imgur.com/IU5D58Q.jpg" />
        <h5 className="preview-title">Touchstone</h5>
        <p className="preview-oneliner">A language app to help learn the basics of braille, designed for teachers or parents of kids who are visually impaired.
        </p>
        <div className="skill-sec">
        <p className="solo-skills">Javascript</p>
        <p className="solo-skills">CSS</p>
        <p className="solo-skills">React</p>
        </div>
      </Link>
      <Link to="/projects/rekt" className="project-preview" id="rekt">
      <img className="preview-pic" src="https://i.imgur.com/IU5D58Q.jpg" />
        <h5 className="preview-title">REK'T</h5>
        <p className="preview-oneliner">A social platform that allows passionate gamers to explore, review, and share their love of their favorite games.
        </p>
        <div className="skill-sec">
        <p className="solo-skills">MongoDB</p>
        <p className="solo-skills">Express</p>
        <p className="solo-skills">React</p>
        <p className="solo-skills">Node.js</p>
        </div>
      </Link>
      <Link to="/projects/riff" className="project-preview" id="riff">
      <img className="preview-pic" src="https://i.imgur.com/IU5D58Q.jpg" />
        <h5 className="preview-title">[RIFF]</h5>
        <p className="preview-oneliner">A platform designed to facilitate collaboration among artists and enable crowd-sourced art creation.
        </p>
        <div className="skill-sec">
        <p className="solo-skills">Django</p>
        <p className="solo-skills">Python</p>
        <p className="solo-skills">React</p>
        <p className="solo-skills">Node.js</p>
        </div>
      </Link>
      <Link to="/projects/wellmet" className="project-preview" id="wellmet">
      <img className="preview-pic" src="https://i.imgur.com/IU5D58Q.jpg" />
        <h5 className="preview-title">Well Met!</h5>
        <p className="preview-oneliner">A virtual walkthrough of all public domain art from The Met.
        </p>
        <div className="skill-sec">
        <p className="solo-skills">Javascript</p>
        <p className="solo-skills">CSS</p>
        <p className="solo-skills">React</p>
        </div>
      </Link>
      <Link to="/projects/whereartthou" className="project-preview" id="whereartthou">
      <img className="preview-pic" src="https://i.imgur.com/IU5D58Q.jpg" />
        <h5 className="preview-title">Where Art Thou?</h5>
        <p className="preview-oneliner">A site where users can find a list of available media, based on their country and streaming service.

        </p>
        <div className="skill-sec">
        <p className="solo-skills">Javascript</p>
        <p className="solo-skills">CSS</p>
        <p className="solo-skills">HTML</p>
        </div>
      </Link>
      <Link to="/projects/broadwaybound" className="project-preview" id="bwaybound">
      <img className="preview-pic" src="https://i.imgur.com/IU5D58Q.jpg" />
        <h5 className="preview-title">Broadway Bound</h5>
        <p className="preview-oneliner">A database of all currently running broadway shows with links to tickets and opening/closing dates.

        </p>
        <div className="skill-sec">
        <p className="solo-skills">MongoDB</p>
        <p className="solo-skills">Express</p>
        <p className="solo-skills">React</p>
        <p className="solo-skills">Node.js</p>
        </div>
      </Link>
      <Navbar />
    </div>
  );
}

export default Projects;
