import React from "react";
import './Navbar.css';
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo" ><a href="#home">Kuldeep Yadav</a></div>
      <div className="list">
        <li ><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="https://drive.google.com/file/d/185m1LjM5bmM9FYdimMBu-Ec9QN3yzDYi/view?usp=drive_link">Resume</a></li>
      </div>
    </div>
  );
}

export default Navbar;
