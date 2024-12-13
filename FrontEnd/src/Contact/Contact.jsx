import React from "react";
import "./Contact.css";
import { TfiMouse } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";

const Contact = ({ language }) => {
  return (
    <div className="height-contact">
      <div className="contact-container">
        <div>
          <p className="contact">
            {language === "EN" ? "Contact Me" : "Contáctame"}
          </p>
        </div>
        <div>
          <p className="contact-p">
            {language === "EN"
              ? "Feel free to contact me and get to know me better"
              : "Siéntete libre de contactarme y conocerme mejor"}
          </p>
        </div>
        <p className="email">
          <span className="icon-email">
            <CiMail />
          </span>
          {"   "} &nbsp; valentinabarbetty2@gmail.com
        </p>
        <div className="fixed-bottom">
          <p className="contact-p">
            {language === "EN"
              ? "Designed and developed by Valentina Barbetty"
              : "Diseñado y desarrollado por Valentina Barbetty"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
