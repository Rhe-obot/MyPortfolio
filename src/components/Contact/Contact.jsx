import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let's Connect</h2>
        <p>I am passionate about what I do and am always eager to collaborate on exciting projects. Whether you're looking to revamp your website, build a new web application, or simply want to discuss the latest trends in frontend development, I'd love to hear from you.
           Let's connect and bring your ideas to life!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:tominiyirheobot@gmail.com">tominiyirheobot@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/tominiyi-rheobot-9626a92a7">linkedin.com/Tominiyi Rheobot</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Rhe-obot">github.com/Rhe-obot</a>
        </li>
      </ul>
    </footer>
  );
};
