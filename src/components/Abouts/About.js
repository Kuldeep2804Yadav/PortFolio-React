import React from "react";

import "./About.css";
import profile from "../assets/Profile.png";
function About() {
  return (
    <div className="main__div" id="about">
      <h1 id="about__intro">Lets talk About me </h1>
      <div className="inner__div">
        <p className="para__div">
          I am a passionate frontend developer skilled in HTML, CSS, JavaScript,
          and ReactJS, dedicated to creating visually appealing and
          user-friendly websites. I have experience in developing dynamic web
          applications and responsive user interfaces, always focusing on
          performance and accessibility.
        </p>
        <img src={profile} alt="profile Image" className="image__profile"></img>
      </div>
    </div>
  );
}

export default About;
