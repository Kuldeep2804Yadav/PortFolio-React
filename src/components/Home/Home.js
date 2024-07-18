import React from "react";
import './Home.css'
import  Logo from '../assets/HomeImage.jpg'

function Home() {
  return (
    <div className="home" id="home">
      <div className="heading">
        <h1 id="intro">Hey' My Name is</h1>
        <h1 id="name">Kuldeep Yadav</h1>
        <div className="headline">Front - End Web Developer</div>
      </div>
      <img src={Logo} alt="Profile Image" className="image_logo"></img>
    </div>
  );
}

export default Home;
