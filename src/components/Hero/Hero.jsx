import React from 'react';
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
import DotField from '../../components/DotField/DotField';

export const Hero = () => {
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
            <h1>Hi, I'm <span className={styles.name}>Rachel</span>.</h1>
            <h2>I'm an aspiring software engineer.</h2>
            <a className={styles.button} href="#about">Have a look around!<span className={styles.arrow}> &darr;</span></a>
        </div>
    </section>
  )
}
