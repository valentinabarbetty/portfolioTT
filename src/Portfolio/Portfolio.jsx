import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import "./Portfolio.css";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Portfolio = () => {
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
      <Navbar />
      <section ref={homeRef} className="hidden home">
        <Home />
      </section>
      <section ref={aboutMeRef} className="hidden ab-me">
        <AboutMe />
      </section>
      <section ref={skillsRef} className="hidden skills">
        <Skills />
      </section>
      <section ref={projectsRef} className="hidden projects">
        <Projects />
      </section>
      <section ref={contactsRef} className="hidden contacts">
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;
