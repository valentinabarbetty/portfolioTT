import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img className="image" src="/img/photo.png" alt="Valentina Barbetty" />
      </div>
      <div className="right">
        <p className="p">Hi, I'm Valentina Barbetty</p>
        <p className="description">Fullstack developer</p>
        <button className="cv-btn">Download my CV</button>{" "}
        <button className="contact-btn">Contact Me</button>
        <div>
          <a href="https://github.com/valentinabarbetty" target="_blank" rel="noopener noreferrer">
            <img className="gh" src="/img/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/valentina-barbetty-476749235/" target="_blank" rel="noopener noreferrer">
            <img className="gh" src="/img/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
