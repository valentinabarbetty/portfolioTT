import React from "react";
import "./Contact.css"

const Contact = ({language}) => {
  return (
    <section className="contact-container">
      <h1>{language === "EN" ? "Contact" : "Contacto"}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        nihil.
      </p>
    </section>
  );
};

export default Contact;
