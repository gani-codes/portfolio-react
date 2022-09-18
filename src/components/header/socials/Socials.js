import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Socials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gani-codes/" target="_balnk">
        <BsLinkedin />
      </a>
      <a href="https://github.com/gani-codes" target="_balnk">
        <BsGithub />{" "}
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=919834588556&text&type=phone_number&app_absent=0"
        target="_balnk"
      >
        <IoLogoWhatsapp />
      </a>
    </div>
  );
}
