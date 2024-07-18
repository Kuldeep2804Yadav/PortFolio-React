import React from "react";
import smartCanteen from "../assets/smartCateen.jpg";
import "./ProjectDetails.css";
import Card from "./Card";

function ProjectDetails() {
  return (
    <Card className="projectDetails">
      <header className="header">
        <h3>Smart Canteen</h3>
      </header>
      <img
        src={smartCanteen}
        alt="Smart Canteen project screenshot"
        className="contentImage"
      />
      <footer className="description">
        <p >
        <strong>Smart Canteen Web Application</strong><br/>
        • Developed a web application for online food ordering using React.<br/>
        • Technologies: React, JavaScript, HTML, CSS, Node.js, Express, Stripe.<br/>
        • Features: Add food items to cart, modify orders, secure payment processing.<br/>
        • Outcome: Created an intuitive web application for streamlined food ordering<br/>
        </p>
      </footer>
    </Card>
  );
}

export default ProjectDetails;
