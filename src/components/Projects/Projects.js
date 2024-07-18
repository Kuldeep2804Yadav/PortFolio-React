import React from "react";
import "./Projects.css";

import ProjectDetails from "../UI/ProjectDetails";
import Card from "../UI/Card";

function Projects() {
  return (
    <div id="projects">
      <h1 className="project_heading">Projects</h1>
      <div className="project__card">
      <ProjectDetails  />
      </div>
        
     
    </div>
  );
}

export default Projects;
