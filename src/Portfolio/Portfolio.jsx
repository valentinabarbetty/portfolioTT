import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import "./Portfolio.css";
import Skills from "../Skills/Skills";

const Portfolio = () => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);

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

    const elements = [homeRef.current, aboutMeRef.current, skillsRef.current];
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
    </div>
  );
};

export default Portfolio;
