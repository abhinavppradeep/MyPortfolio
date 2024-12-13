import React from "react";
import heroImage from "../../../asset/hero/heroImage.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhinav</h1>
        <p className={styles.description}>
          I’m a third-year ECE student passionate about AI, web development, and
          app development. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:abhinavppradeep01@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
