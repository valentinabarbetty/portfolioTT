import React from "react";
import "./Home.css";
import { TfiMouse } from "react-icons/tfi";

const Home = ({ language }) => {
  return (
    <div >
      <div className="container">
        <div className="image-container">
          <img
            className="image"
            src="/img/photo.png"
            alt="Valentina Barbetty"
          />
        </div>
        <div className="right">
          <p className="p">
            {language === "EN"
              ? "Hi, I'm Valentina Barbetty"
              : "Hola, Soy Valentina Barbetty"}
          </p>
          <p className="description">
            {language === "EN"
              ? "Fullstack Developer"
              : "Desarrolladora Fullstack"}
          </p>
          <button className="cv-btn">
            {language === "EN" ? "Download my CV" : "Descargar mi CV"}
          </button>{" "}
          <button className="contact-btn">
            {language === "EN" ? "Contact Me" : "Contáctame"}
          </button>
          <div>
            <a
              href="https://github.com/valentinabarbetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="gh" src="/img/github.png" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/valentina-barbetty-476749235/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="gh" src="/img/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <p className="scroll-down">
        <span className="icon">
          <TfiMouse />
        </span>{"   "} &nbsp;
        {language === "EN" ? "Scroll down" : "Desliza hacia abajo"}
      </p>
    </div>
  );
};

export default Home;
