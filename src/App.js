import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("EN");
  return (
    <div className="App">
      <Portfolio language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
