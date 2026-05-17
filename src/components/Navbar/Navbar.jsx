import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={menuOpen 
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")} 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            {/* unordered list (wrap className in `` to allow assignment of multiple diff classNames) */}
            <ul 
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            /* onClick... closes menu for user once user clicks a tab to navigate to */
            onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
};
