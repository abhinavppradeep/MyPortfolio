import React from 'react';
import styles from './Navbar.module.css';
 

export const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
        <a className={styles.title } href="/">Portfolio
        <div className={styles.menu }>
            <ul className={styles.menuitems }>
                 <li>
                     <a href='#about'>About</a>
                 </li>
                 <li>
                     <a href='#expirience'>Expirience</a>
                 </li>
                 <li>
                     <a href='#projects'>Projects </a>
                 </li>
                 <li>
                     <a href='#contact'>Contact  </a>
                 </li>
            </ul>
        </div>
        </a>
    </nav>
  )
}
