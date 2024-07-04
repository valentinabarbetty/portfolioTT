import React from "react";
import "./Projects.css";

const Projects = ({ language }) => {
  return (
    <div className="height-pro">
      <div className="title-pro">
        <p>{language === "EN" ? "Projects" : "Proyectos"}</p>
      </div>

      <div className="pro-container">
        <div className="card-container">
          <div className="card">
            <div className="front">
              <h1>Inventech</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dignissimos cupiditate nobis 
                nesciunt eaque, quam perspiciatis cumque deserunt 
                libero quo. Quae dolores delectus aut saepe neque
                 asperiores iure dolore fugiat!</p>
            </div>
            <div className="back">
              <h1>Technologies</h1>
              <p>Roles</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">
              <h1>Alice Effect</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dignissimos cupiditate nobis 
                nesciunt eaque, quam perspiciatis cumque deserunt 
                libero quo. Quae dolores delectus aut saepe neque
                 asperiores iure dolore fugiat!</p>
            </div>
            <div className="back">
              <h1>Technologies</h1>
              <p>Roles</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">
              <h1>Softdipal</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dignissimos cupiditate nobis 
                nesciunt eaque, quam perspiciatis cumque deserunt 
                libero quo. Quae dolores delectus aut saepe neque
                 asperiores iure dolore fugiat!</p>
            </div>
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
