import React from 'react'
import { getImageUrl } from '../../utils';
import LogoLoop from '../LogoLoop/LogoLoop';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiGit, SiPostman, SiFigma, SiPython, SiC, SiJavascript, SiHtml5, SiCss} from 'react-icons/si'; 
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import styles from './About.module.css';

export const About = () => {
    const techLogos = [
    { node: <TbApi />, title: "APIs"},
    { node: <SiReact />, title: "React"},
    { node: <SiNodedotjs />, title: "Node.js"},
    { node: <SiTypescript />, title: "TypeScript"},
    { node: <SiTailwindcss />, title: "Tailwind CSS"},
    { node: <SiGit />, title: "Git"},
    { node: <SiPostman />, title: "Postman"},
    { node: <SiFigma />, title: "Figma"},
    { node: <FaJava />, title: "Java"},
    { node: <SiPython />, title: "Python"},
    { node: <SiC />, title: "C"},
    { node: <SiJavascript />, title: "Javascript"},
    { node: <SiHtml5 />, title: "HTML"},
    { node: <SiCss />, title: "CSS"},
    ];

  return (
    <section className={styles.container} id="about">
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        <div className={styles.title}>
            <h2>About</h2>
            <div />
        </div>
        <div className={styles.content}>
            <div className={styles.image}>
                <img
                    src={getImageUrl("about/headshot.png")}
                    alt="My headshot"
                    className={styles.headshot}
                />
                <div className={styles.imageShadow} />
            </div>
            <div className={styles.rightContent}>
                <p>Hi there, my name is Rachel Le. I am an undergraduate Computer Science student at the University of Texas at Austin pursuing double 
                    minors in Business Foundations and Statistics & Data Science, with an expected graduation date of May 2028. Building on my experience 
                    in quality assurance testing and software development, I strive to continuously improve my technical and collaborative skills as a developer. 
                    Outside of work, I enjoy spending time with my friends and family, trying new foods, shopping, and relaxing with some good TV!</p>
                <div className={styles.buttons}>
                    <div className={styles.resumeBtnWrapper}>
                        <a
                            href="https://drive.google.com/file/d/1VL2ib05vqt4Kr4ag7W-bQaMMT7S_PIAN/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resumeBtn}
                        >
                            <img
                                src={getImageUrl("about/resumeImage.png")}
                                alt="Link redirect icon"
                            />
                            Resume
                        </a>
                    </div>
                    <a
                        href="#contact"
                        className={styles.contactBtn}
                    >
                        <img
                            src={getImageUrl("about/contactImage.png")}
                            alt="Contact icon"
                        />
                        Contact
                    </a>
                </div>
                <div className={styles.divider} />
                <h3>Skills</h3>
                <div className={styles.skills}>
                <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={50}
                    scaleOnHover={false}
                    fadeOut
                    fadeOutColor="#1b1227"
                    ariaLabel="Skills"
                />
                </div>
            </div>
        </div>
    </section>
  )
}

/* add id to enable navbar navigation 
    <section className={styles.container} id="about"> 
        <div>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="Server icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimized back-end systems and APIs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="UI icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI Developer</h3>
                            <p>I have designed multiple landing pages and have created design systems as well.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section> */
