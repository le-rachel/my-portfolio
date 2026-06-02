import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
        <h3>Let's Connect!</h3>
        <div className={styles.title}>
            <h2>Contact</h2>
            <div />
        </div>
        <p className={styles.description}>I am currently open to Summer 2027 internships. Whether you have a question or just want to say hi, my inbox is always open!</p>
        <ul className={styles.buttons}>
            <a className={styles.emailBtn} href={"mailto: le.rachel@hotmail.com"} target="_blank" rel="noopener noreferrer">
                <img
                    src={getImageUrl("contact/email-icon.png")}
                    alt="Email Icon"
                />
                <div>
                    <p>Email</p>
                    <span>le.rachel@hotmail.com</span>
                </div>
            </a>
            <div>
                <a className={styles.linkedinBtn} href={"https://www.linkedin.com/in/le-rachel"} target="_blank" rel="noopener noreferrer">
                    <img
                        src={getImageUrl("contact/linkedin-icon.png")}
                        alt="LinkedIn Icon"
                    />
                    <div>
                        <p>LinkedIn</p>
                        <span>linkedin.com/le-rachel</span>
                    </div>
                </a>
                <a className={styles.githubBtn} href={"https://github.com/le-rachel"} target="_blank" rel="noopener noreferrer">
                    <img
                        src={getImageUrl("contact/github-icon.png")}
                        alt="GitHub Icon"
                    />
                    <div>
                        <p>GitHub</p>
                        <span>github.com/le-rachel</span>
                    </div>
                </a>
            </div>
        </ul>
    </section>

    /*
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Let's Connect!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto: myemail@email.com">myemail@email.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://www.github.com/myname">github.com/myname</a>
            </li>
        </ul>
    </footer>*/
  )
}
