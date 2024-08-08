import React, { useRef } from "react";
import "./StyleSheets/Home.css";
import Navbar from "../components/navBar/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
       <div className="project-previews">
        <Link className="project-preview-wat" to="/projects/whereartthou">
          <img
            className="project-preview-image"
            id="ppi-wat"
            src="https://i.imgur.com/Ck5edln.png"
          />
        </Link>
        <Link className="project-preview-bb" to="/projects/bwaybound">
          <img
            className="project-preview-image"
            id="ppi-bb"
            src="https://i.imgur.com/dzoZa8Y.png"
          />
        </Link>
        </div>
      <div className="introBox">
        <h3 className="introName">Hi, I'm Grace! </h3>
        <p className="introDescriptor">
          I'm a software developer, <br></br>artist, and sailor.
        </p>
      </div>
      <div class="gradient"></div>
      <div className="project-previews">
        <Link className="project-preview-ts" to="/projects/touchstone">
          <img
            className="project-preview-image"
            id="ppi-ts"
            src="https://i.imgur.com/iV3kRAY.jpeg"
          />
        </Link>
        <Link className="project-preview-rekt" to="/projects/rekt">
          <img
            className="project-preview-image"
            id="ppi-rkt"
            src="https://i.imgur.com/pnwr40r.png"
          />
        </Link>
        <Link className="project-preview-wm" to="/projects/wellmet">
          <img
            className="project-preview-image"
            id="ppi-wm"
            src="https://i.imgur.com/bSm34Em.png"
          />
        </Link>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
