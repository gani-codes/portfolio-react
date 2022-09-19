import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
export default function about() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__card-icon" />
              <h5>Projects</h5>
              <small>3+ Done</small>
            </article>
            <article className="about__card">
              <BiCodeCurly className="about__card-icon" />
              <h5>Skills</h5>
              <small>React</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            voluptatem eveniet ipsam
          </p>
          <button className="btn btn-primary">Let's talk</button>
        </div>
      </div>
    </section>
  );
}
