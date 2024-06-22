import React, { useState } from "react";
import "./Navbar.css";
import { TfiWorld } from "react-icons/tfi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
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
              <a href="/">
                <span className="icon">
                  <TfiWorld />
                </span>{" "}
                ES
              </a>
            </li>
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={handleMenuClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
