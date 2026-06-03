import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
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
