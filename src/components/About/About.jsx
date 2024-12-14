import React from "react";
import aboutImage from "../../../asset/about/aboutImage.png";
import cursorIcon from "../../../asset/about/cursorIcon.png";
import serverIcon from "../../../asset/about/serverIcon.png";
import uiIcon from "../../../asset/about/uiIcon.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="curser icon" />
            <div className={styles.aboutItemText}>
              <h3>App Developer</h3>
              <p>
                I'm an Flutter developer with experience in building responsive
                apps
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I have experience in developing full stack projects. React, Node
                JS, MongoDb
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Developer</h3>
              <p>
                I have experience in coding and deploying end to end AI projects
                in NLP, CV etc
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
