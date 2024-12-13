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
              <p className="info-pro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                dignissimos cupiditate nobis nesciunt eaque, quam perspiciatis
                cumque deserunt libero quo. Quae dolores delectus aut saepe
                neque asperiores iure dolore fugiat!
              </p>
            </div>
            <div className="back">
              <p className="titles">Technologies:</p>
              <img src="/tech/angular.png" alt="" className="img-links" />
              <img src="/tech/ts.png" alt="" className="img-links" />
              <img src="/tech/python.png" alt="" className="img-links" />
              <p className="titles">
                Roles: <p className="info">Scrum Master, Front-end Developer</p>
              </p>
              <p className="titles">Interesting Links: </p>
              <a
                href="https://inventechcol.netlify.app/dashboard"
                target="_blank"
              >
                <img src="/img/link.png" alt="GitHub" className="img-links" />
              </a>
              <a
                href="https://github.com/Unisoft-Project/Front-Unisoft"
                target="_blank"
              >
                <img src="/img/github.png" alt="" className="img-links" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">
              <h1>Alice Effect</h1>
              <p className="info-pro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                dignissimos cupiditate nobis nesciunt eaque, quam perspiciatis
                cumque deserunt libero quo. Quae dolores delectus aut saepe
                neque asperiores iure dolore fugiat!
              </p>
            </div>
            <div className="back">
              <p className="titles">Technologies:</p>
              <img src="/tech/react.png" alt="" className="img-links" />
              <img src="/tech/js.png" alt="" className="img-links" />
              <img src="/tech/nodejs.png" alt="" className="img-links" />
              <p className="titles">
                Roles: <p className="info">Scrum Master, Front-end Developer</p>
              </p>
              <p className="titles">Interesting Links: </p>
              <a
                href="https://el-efecto-alice.vercel.app"
                target="_blank"
              >
                <img src="/img/link.png" alt="GitHub" className="img-links" />
              </a>
              <a
                href="https://github.com/valentinabarbetty19/El-Efecto-Alice"
                target="_blank"
              >
                <img src="/img/github.png" alt="" className="img-links" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">
              <h1>Softdipal</h1>
              <p className="info-pro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                dignissimos cupiditate nobis nesciunt eaque, quam perspiciatis
                cumque deserunt libero quo. Quae dolores delectus aut saepe
                neque asperiores iure dolore fugiat!
              </p>
            </div>
            <div className="back">
              <p className="titles">Technologies:</p>
              <img src="/tech/angular.png" alt="" className="img-links" />
              <img src="/tech/ts.png" alt="" className="img-links" />
              <img src="/tech/python.png" alt="" className="img-links" />
              <p className="titles">
                Roles: <p className="info">Scrum Master, Full-Stack Developer</p>
              </p>
              <p className="titles">Interesting Links: </p>
              <a
                href="https://inventechcol.netlify.app/dashboard"
                target="_blank"
              >
                <img src="/img/link.png" alt="GitHub" className="img-links" />
              </a>
              <a
                href="https://github.com/Unisoft-Project/Front-Unisoft"
                target="_blank"
              >
                <img src="/img/github.png" alt="" className="img-links" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
