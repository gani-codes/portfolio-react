import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
let data = [
  {
    id: 1,
    image: IMG1,
    title: "Pizza Wizza",
    github: "https://github.com/gani-codes/Pizza-Wizza.git",
    demo: "https://gani-codes.github.io/Pizza-Wizza/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Zeal Academy",
    github: "https://github.com/gani-codes/zealacademy.git",
    demo: "https://gani-codes.github.io/zealacademy/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Sweet Temptation",
    github:
      "https://github.com/gani-codes/Sweet-Tempataion-Cafe-Restaurant.git",
    demo: "https://github.com/gani-codes/Sweet-Tempataion-Cafe-Restaurant.git",
  },
];
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
