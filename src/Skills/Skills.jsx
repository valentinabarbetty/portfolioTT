import React from "react";
import "./Skills.css";

const Skills = ({ language }) => {
  return (
    <div className="height">
      <div className="title-sk">
        <h1>{language === "EN" ? "Skills" : "Habilidades"}</h1>
      </div>

      <div className="skills-container">
        <div className="columns-skills">
          <h1>
            {" "}
            {language === "EN"
              ? "Programming languages"
              : "Lenguajes de Programación"}
          </h1>
          <div className="lang-grid">
            <div>
              <img src="/tech/python.png" alt="" className="imagen" />
              <p>Python</p>
            </div>
            <div>
              <img src="/tech/typescript.png" alt="" className="imagen" />
              <p>Typescript</p>
            </div>
            <div>
              <img src="/tech/js.png" alt="" className="imagen" />
              <p>Javascript</p>
            </div>
          </div>
          <div className="lang-grid">
            <div>
              <img src="/tech/java.png" alt="" className="imagen" />
              <p>Java</p>
            </div>
            <div>
              <img src="/tech/html.svg" alt="" className="imagen" />
              <p>Html</p>
            </div>
            <div>
              <img src="/tech/css.png" alt="" className="imagen" />
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className="columns-skills">
          <h1>
            {" "}
            {language === "EN"
              ? "Tools and Technologies"
              : "Herramientas y Tecnologías"}
          </h1>
          <div className="lang-grid">
            <div>
              <img src="/tech/github.png" alt="" className="imagen" />
              <p>GitHub</p>
            </div>
            <div>
              <img src="/tech/figma.webp" alt="" className="imagen" />
              <p>Figma</p>
            </div>
            <div>
              <img src="/tech/jira.webp" alt="" className="imagen" />
              <p>Jira</p>
            </div>
          </div>
          <div className="lang-grid">
            <div>
              <img src="/tech/trello.webp" alt="" className="imagen" />
              <p>Trello</p>
            </div>
            <div>
              <img src="/tech/firebase.webp" alt="" className="imagen" />
              <p>Firebase</p>
            </div>
            <div>
              <img src="/tech/git.png" alt="" className="imagen" />
              <p>Git</p>
            </div>
          </div>
        </div>

      </div>
      <div className="skills-container">
      <div className="columns-skills">
          <h1>
            {" "}
            {language === "EN"
              ? "Frameworks and Libraries"
              : "Frameworks y Librerías"}
          </h1>
          <div className="lang-grid">
            <div>
              <img src="/tech/angular.png" alt="" className="imagen" />
              <p>Angular</p>
            </div>
            <div>
              <img src="/tech/react.png" alt="" className="imagen" />
              <p>React</p>
            </div>
            <div>
              <img src="/tech/nodejs.png" alt="" className="imagen" />
              <p>Node.js</p>
            </div>
          </div>
        </div>
        <div className="columns-skills">
          <h1>
            {" "}
            {language === "EN"
              ? "Databases"
              : "Bases de Datos"}
          </h1>
          <div className="lang-grid">
            <div>
              <img src="/tech/mysql.png" alt="" className="imagen" />
              <p>MySQL</p>
            </div>
            <div>
              <img src="/tech/firebase.webp" alt="" className="imagen" />
              <p>Firebase</p>
            </div>
            <div>
              <img src="/tech/mongodb.png" alt="" className="imagen" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
