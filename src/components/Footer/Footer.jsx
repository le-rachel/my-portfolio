import React from 'react';

import styles from "./Footer.module.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <footer className={styles.container}>
            <p>Rachel Le @2026</p>
        </footer>
        <div className={styles.arrowBtn}>
            <a href={"#home"}>
                <MdKeyboardDoubleArrowUp className={styles.arrow}/>
            </a>
        </div>
    </div>
  )
}
