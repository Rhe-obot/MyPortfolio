import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>My Philosophy</h3>
              <p>
              I am a firm believer in the power of collaboration and continuous improvement. I thrive in dynamic environments where ideas are shared freely, feedback is welcomed,
               and innovation is encouraged. I approach each project with enthusiasm, a keen eye for detail, and a relentless pursuit of excellence.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with  a little experience in building responsive
                and optimized sites. From HTML, CSS, and JavaScript to modern frameworks like React and Vue.js
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Responsive Design</h3>
              <p>
              Creating websites that adapt fluidly to various screen sizes and devices is essential in today's mobile-first era. I specialize in building responsive designs that provide a consistent and optimized experience across platforms.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
