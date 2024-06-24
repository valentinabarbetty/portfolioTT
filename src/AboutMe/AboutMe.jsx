import React from "react";
import "./AboutMe.css";
import { TfiMouse } from "react-icons/tfi";
const AboutMe = ({ language }) => {
  return (
    <div>
      <section className="ab-container">
        <div className="left">
          <div className="title-left">
            <p>{language === "EN" ? "About Me" : "Acerca de Mi"}</p>
          </div>
          <div className="p-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              sapiente, optio aut amet necessitatibus libero dolor alias nemo
              fugit, et, veniam obcaecati ipsa nesciunt in possimus quis error
              quisquam quasi. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Asperiores, at sunt itaque voluptate debitis
              ullam a eligendi dolorum quam doloremque quos reiciendis
              accusantium libero aspernatur hic! Illum animi incidunt atque!
            </p>
          </div>
        </div>

        <div className="right">
          {" "}
          {language === "EN" ? "Education" : "Eduación"}
        </div>
      </section>
      <p className="scroll-down">
        <span className="icon">
          <TfiMouse />
        </span>{" "}&nbsp;
        {language === "EN" ? "Scroll down" : "Desliza hacia abajo"}
      </p>
    </div>
  );
};

export default AboutMe;
