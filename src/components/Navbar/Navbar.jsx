import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} />
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#expirience">Expirience</a>
          </li>
          <li>
            <a href="#projects">Projects </a>
          </li>
          <li>
            <a href="#contact">Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
