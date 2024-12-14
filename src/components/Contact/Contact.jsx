import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailIcon from "../../../asset/contact/emailIcon.png";
import linkedinIcon from "../../../asset/contact/linkedinIcon.png";
import githubIcon from "../../../asset/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:abhinavppradeep01@email.com">
            abhinavppradeep01@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/abhinavppradeep/">
            linkedin.com/abhinavppradeep
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/abhinavppradeep">
            github.com/abhinavppradeep
          </a>
        </li>
      </ul>
    </footer>
  );
};
