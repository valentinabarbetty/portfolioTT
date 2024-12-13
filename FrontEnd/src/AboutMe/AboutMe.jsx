import React from "react";
import "./AboutMe.css";
import { TfiMouse } from "react-icons/tfi";

const AboutMe = ({ language }) => {
  return (
    <div className="centered">

      <div className="ab-container">
        <div className="left-ab">
          <div className="title-left">
            <p>{language === "EN" ? "About Me" : "Acerca de Mi"}</p>
          </div>
          <div className="p-left">
            <p>
              {language === "EN"
                ? "I'm a systems engineering student at Universidad del Valle, passionate about full-stack development. I have learned so much regarding my career and am more excited to continue learning, especially about AI, cloud computing, and more. I'm eager to dive deeper into these fields, participate in cutting-edge projects, and enhance my skills. My goal is to constantly grow, becoming a proficient and versatile developer capable of building innovative solutions that address real-world challenges. I am looking forward to contributing to a dynamic team, staying updated with emerging technologies, and making a meaningful impact in the tech industry."
                : "Soy estudiante de Ingeniería de Sistemas en la Universidad del Valle, apasionada por el desarrollo full-stack. He aprendido mucho en mi carrera y estoy aún más entusiasmada por seguir aprendiendo, especialmente sobre inteligencia artificial, computación en la nube y más. Estoy ansiosa por profundizar en estos campos, participar en proyectos innovadores y mejorar mis habilidades. Mi objetivo es crecer constantemente, convirtiéndome en una desarrolladora competente y versátil, capaz de crear soluciones innovadoras que aborden desafíos del mundo real. Espero contribuir a un equipo dinámico, mantenerme al día con las tecnologías emergentes y tener un impacto significativo en la industria tecnológica."}
            </p>
          </div>
        </div>

        <div className="right-ab">
          <div className="education-title">
            {language === "EN" ? "Education" : "Educación"}
          </div>
          <div className="timeline">
          <div className="timeline-item">

              
              <p>2016: Bachelor degree</p>
           
          </div>
          <div className="timeline-item">
         
      
              <p>2022: Systems of Information Technologist</p>
          
          </div>
          <div className="timeline-item">
        
              <p>Present: Systems Engineering</p>
            
          </div>
          </div>
        </div>
      </div>
      <p className="scroll-down">
        <span className="icon">
          <TfiMouse />
        </span>{" "}
        &nbsp;
        {language === "EN" ? "Scroll down" : "Desliza hacia abajo"}
      </p>
    </div>

  );
};

export default AboutMe;
