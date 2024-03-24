import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rheoboth</h1>
        <p className={styles.description}>
          I'm a Frontend developer  with no experience.
            Practicing to get better and  create  responsive website, improve my frontend skills and
             make the World a better place with my skills. God Bless .
              
        </p>
        <a href="mailto:tominiyirheobot@gmail.com" className={styles.contactBtn}>
          Hire Me

        </a>
        
                
      </div>
      <img
        src={getImageUrl("hero/Mypic.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
