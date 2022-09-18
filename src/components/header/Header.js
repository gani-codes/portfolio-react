import React from "react";
import "./header.css";
import resume from "../../assets/cv.pdf";
import ME from "../../assets/me.png";
import Socials from "./socials/Socials";
export default function header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Namaste, I'm</h5>
        <h1>Gani</h1>
        <h5 className="text-light">React Developer</h5>
        <div className="cta">
          <a className="btn" href={resume} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a className="btn btn-primary" href="#contact">
            Let's Chat
          </a>
        </div>
        <Socials />
        <div className="me">
          <img src={ME} alt="my-profile-pic" />
        </div>

        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
