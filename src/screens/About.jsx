import React from "react";
import "./StyleSheets/About.css";
import Navbar from "../components/navBar/Navbar";
import ProfileCard from "../components/Profilecard/profileCard";

function About() {
  return (
    <div className="aboutPage">
      <ProfileCard />
      <div className="aboutSection">
        <div className="longerBio">
          <h2>About Me :)</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
          blandit diam. Quisque consequat at mauris et venenatis. Donec nec
          varius diam. Sed ut massa sed risus vehicula aliquet. Vestibulum vel
          efficitur orci. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aliquam erat volutpat. Nulla luctus nunc massa. Sed id augue
          ac mi mattis egestas. In ultrices metus a rhoncus ultricies. Morbi vel
          dui mollis, ullamcorper orci sed, dapibus urna. Nunc facilisis a
          turpis in tincidunt. Maecenas imperdiet, orci at faucibus tincidunt,
          eros ipsum vehicula lorem, ultrices iaculis augue nulla fermentum
          neque. Pellentesque posuere vulputate scelerisque. Nullam gravida,
          ante quis blandit tincidunt, ipsum elit egestas neque, nec porta arcu
          lectus in mi. Quisque sed convallis dui. Suspendisse ac porttitor
          massa. Sed ornare diam enim, ut laoreet mi rhoncus eu.
          </p>
        </div>
        <div className="experience">
        <h2>Experience</h2>
        </div>
        <div className="skills">
        <h2>Skills</h2>
        </div>
        
        
      </div>
      <Navbar />
    </div>
  );
}

export default About;
