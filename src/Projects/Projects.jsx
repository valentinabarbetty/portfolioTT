import React from "react";
import "./Projects.css";

const Projects = ({ language }) => {
  return (
    <div className="height">
      <div className="title-sk">
        <h1>{language === "EN" ? "Projects" : "Proyectos"}</h1>
      </div>

      <div className="skills-container">
        <div className="card-container">
          <div className="card">
            <div className="front"></div>
            <div className="back">
              <h1>Technologies</h1>
              <p>Roles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
