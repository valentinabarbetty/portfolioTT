import React from "react";
import "./Projects.css"

const Projects = ({language}) => {
  return (
    <section className="projects-container">
      <div>{language === "EN" ? "Projects" : "Proyectos"}</div>
      <div>Education</div>
    </section>
  );
};

export default Projects;
