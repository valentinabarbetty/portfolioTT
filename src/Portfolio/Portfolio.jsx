import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import "./Portfolio.css";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Portfolio = ({ language, setLanguage }) => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const elements = [homeRef.current, aboutMeRef.current, skillsRef.current, projectsRef.current, contactsRef.current];
    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="portfolio">
      <Navbar language={language} setLanguage={setLanguage}/>
      <section ref={homeRef} className="hidden">
        <Home language={language}/>
      </section>
      <section ref={aboutMeRef} className="hidden">

        <AboutMe language={language}/>
      
      </section>
      
       <section ref={skillsRef} className="hidden">
        <Skills language={language}/>
      </section>
       
      <section ref={projectsRef} className="hidden projects">
        <Projects language={language}/>
      </section>
      {/*
      <section ref={contactsRef} className="hidden contacts">
        <Contact language={language}/>
      </section> */}
    </div>
  );
};

export default Portfolio;
