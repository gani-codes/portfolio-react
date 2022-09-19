import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { SiMinutemailer, SiWhatsapp } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kq1zs6e",
        "template_3947ux7",
        form.current,
        "3fuGJoE1skwvvneJY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiMinutemailer className="contact__option-icon" />
            <p>Email</p>
            <h5>abdulgani.work@gmail.com</h5>
            <a
              href="mailto:abdulgani.work@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Drop a mail
            </a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <p>WhatsApp</p>
            <a
              href="https://api.whatsapp.com/send/?phone=919834588556&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              Say Hello
            </a>
          </article>
          <article className="contact__option">
            <ImLinkedin className="contact__option-icon" />
            <p>LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/gani-codes/"
              target="_blank"
              rel="noreferrer"
            >
              Let's Connect
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="A message for me"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
