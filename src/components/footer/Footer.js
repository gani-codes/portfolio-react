import React from "react";
import "./footer.css";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";
export default function footer() {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        Gani
      </a>
      <ul className="footer__permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="www.instagram.com/gani9_" target="_blank" rel="noreferrer">
          <AiOutlineInstagram />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=919834588556&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineWhatsApp />
        </a>
        <a
          href="https://www.linkedin.com/in/gani-codes/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
    </footer>
  );
}
