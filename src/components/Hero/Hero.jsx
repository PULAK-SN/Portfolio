import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pulak</h1>
        <p className={styles.description}>
          Aspiring Front-End Web Developer with a strong foundation in HTML,
          CSS, JavaScript, and modern frameworks like React. Passionate about
          building responsive, user-friendly interfaces and continuously
          learning new technologies.
        </p>
        <a href="mailto:pulaksen.dev@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
