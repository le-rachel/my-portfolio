import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
import DotField from '../../components/DotField/DotField';

const PREFIX = "Hi, I'm ";
const NAME = "Rachel";
const SUFFIX = ".";
const FULL_TEXT = PREFIX + NAME + SUFFIX;

export const Hero = () => {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (charCount >= FULL_TEXT.length) return;
    const timeout = setTimeout(() => setCharCount(c => c + 1), 75);
    return () => clearTimeout(timeout);
  }, [charCount]);

  const renderH1 = () => {
    if (charCount <= PREFIX.length) {
      return <>{FULL_TEXT.slice(0, charCount)}<span className={styles.cursor}>|</span></>;
    } else if (charCount <= PREFIX.length + NAME.length) {
      return <>{PREFIX}<span className={styles.name}>{NAME.slice(0, charCount - PREFIX.length)}</span><span className={styles.cursor}>|</span></>;
    } else {
      return <>{PREFIX}<span className={styles.name}>{NAME}</span>{SUFFIX.slice(0, charCount - PREFIX.length - NAME.length)}<span className={styles.cursor}>|</span></>;
    }
  };

  return (
    <section id="home" className={styles.container}>
        <div className={styles.background}>
            <DotField
                dotRadius={10}
                dotSpacing={25}
                bulgeStrength={67}
                glowRadius={75}
                sparkle={false}
                waveAmplitude={0}
                cursorRadius={500}
                cursorForce={0.1}
                bulgeOnly
                gradientFrom="#40288D"
                gradientTo="#40288D"
                glowColor="#120F17"
            />
        </div>
        <div className={styles.text}>
            <h3>Welcome to my space!</h3>
            <h1>{renderH1()}</h1>
            <h2>I'm an aspiring software engineer.</h2>
            <a className={styles.button} href="#about">Have a look around!<span className={styles.arrow}> &darr;</span></a>
        </div>
    </section>
  )
}
