import React from "react";
import "./StyleSheets/About.css";
import Navbar from "../components/navBar/Navbar";
import ProfileCard from "../components/Profilecard/profileCard";
import pdf from "../FullResumeGraceClower.pdf"


function About() {
  return (
    <div className="aboutPage">
      <div id="profileSection">
        <ProfileCard />
      </div>
      <div className="aboutSection">
        <div className="longerBio">
          <h2>About Me :)</h2>
          <p className="bio">
            I'm Grace! A software developer and artist who loves solving
            puzzles, working with a team, and finding creative solutions. In my
            previous career in customer service I helped build teams that
            focused on collaboration and sharing resources. I also found a deep
            love of helping others learn and thrive through my time teaching
            stage combat. I want to bring my curiosity and problem-solving
            skills to help a team grow and build creative technology to make art
            accessible to as many people as possible.
            <br></br>
            <br></br>
            In my free time, I explore on the SV Amari. I love going to new
            places and meeting wonderful people from around the world. I also
            obessesivly cross-stitch and I've just started DM'ing some D&D
            campaigns for my friends and family!
          </p>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="resume-toyota">
            <h5>Service Team Lead - Rutherford & Bond Toyota</h5>
            <ul>
              <li>
                Built a customized tracking system in Excel to track all active
                jobs to support project management and align budgets to monthly
                growth targets and KPIs.{" "}
              </li>
              <li>
                Conducted team training programs; individualizing strategy and
                planning based on employee needs.
              </li>
            </ul>
            <hr></hr>
          </div>
          <div className="resume-medwell">
            <h5>Client Relations Manager - Mediterranean Wellness</h5>
            <ul>
              <li>
                Managed multiple corporate clients as primary POC, scheduling
                and implementing yearly employee challenges, wellness education,
                and biometric data to increase employee health and engagements;
                reducing overhead costs.
              </li>
              <li>
                Organized and managed a global weight loss program with over 3K
                participants and a global fitness program that spanned 28
                countries.
              </li>
            </ul>
            <hr></hr>
          </div>
          <div className="resume-noho">
            <h5>Reservations Supervisor - NoHo Hospitality</h5>
            <ul>
              <li>
                Supervised a centralized reservations department that took calls
                for 12 restaurant and bar locations in Manhattan, Brooklyn,
                Baltimore, and Detroit receiving approximately 6,000 calls per
                week.
              </li>
            </ul>
            <hr></hr>
          </div>
          <div className="resume-combat">
            <h5>Assistant Teacher - Stage Combat - NYU, SUNY Purchase</h5>
            <ul>
              <li>
                Taught multiple stage combat weapon techniques across various
                age groups, focusing on safety and flexibility of learning
                styles.
              </li>
            </ul>
          </div>
          <div className="resume-div">
            <a classname="resume" href={pdf} download target="_blank" rel="noreferrer">
              View Full Resume
            </a>
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skill-sec">
          <p className="solo-skills">Javascript</p>
          <p className="solo-skills">Python</p>
          <p className="solo-skills">PHP</p>
          <p className="solo-skills">HTML</p>
          <p className="solo-skills">CSS</p>
          <p className="solo-skills">SQL</p>
          <p className="solo-skills">Git</p>
          <p className="solo-skills">Node.js</p>
          <p className="solo-skills">JSON</p>
          <p className="solo-skills">React</p>
          <p className="solo-skills">Express</p>
          <p className="solo-skills">Django</p>
          <p className="solo-skills">MongoDB</p>
          <p className="solo-skills">PostgreSQL</p>
          <p className="solo-skills">RESTful Routing</p>
          <p className="solo-skills">Express</p>

          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default About;
