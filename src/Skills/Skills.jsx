import React from 'react'
import "./Skills.css"

const Skills = ({language}) => {
  return (
    <section className="skills-container">
        <h1> {language === "EN" ? "Skills" : "Habilidades"}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nihil.</p>   
    </section>
  )
}

export default Skills