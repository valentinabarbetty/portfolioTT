import React from "react";
import "./Navbar.css";
import { TfiWorld } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="italiana-regular nav-left">
            <a href="/">Valentina</a>
          </li>
          <li className="nav-right">
            <a href="/">Contact</a>
          </li>
          <li className="nav-right">
            <a href="/">Projects</a>
          </li>
          <li className="nav-right">
            <a href="/">Skills</a>
          </li>
          <li className="nav-right">
            <a href="/">About Me</a>
          </li>
          <li className="nav-right">
            <a href="/">
              <span className="icon"><TfiWorld /></span> ES
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
