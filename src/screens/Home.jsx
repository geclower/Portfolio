import React from "react";
import "./StyleSheets/Home.css";
import Navbar from "../components/navBar/Navbar";

function Home() {
  return (
    <div className="homePage">
    
      <div className="introBox">
        <h3 className="introName">Hi, I'm Grace! </h3>
        <p className="introDescriptor">
          I'm a software developer, <br></br>artist, and sailor.
        </p>
      </div>
      <div class="gradient"></div>
     
      <Navbar />
    </div>
  );
}

export default Home;
