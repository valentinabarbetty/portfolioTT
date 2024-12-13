import React, { useState } from "react";
import "./Navbar.css";
import { TfiWorld } from "react-icons/tfi";

const Navbar = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLanguageChange = (e) => {
    e.preventDefault();
    setLanguage(language === "EN" ? "ES" : "EN");
  };

  return (
    <header className="header">
      <div className="content">
        <a className="italiana-regular logo" href="/">
          Valentina
        </a>
        <nav className={`navbar ${menuOpen ? "menu" : ""}`}>
          <ul className="content">
            <li>
              <a href="/" onClick={handleLanguageChange}>
                <span className="icon">
                  <TfiWorld />
                </span>{" "}
                {language === "EN" ? "ES" : "EN"}
              </a>
            </li>
            <li>
              <a href="/">{language === "EN" ? "About Me" : "Sobre mí"}</a>
            </li>
            <li>
              <a href="/">{language === "EN" ? "Skills" : "Habilidades"}</a>
            </li>
            <li>
              <a href="/">{language === "EN" ? "Projects" : "Proyectos"}</a>
            </li>
            <li>
              <a href="/">{language === "EN" ? "Contact" : "Contacto"}</a>
            </li>
          </ul>
        </nav>
        <div className={`hamburger ${menuOpen ? "menu-open" : ""}`} onClick={handleMenuClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
