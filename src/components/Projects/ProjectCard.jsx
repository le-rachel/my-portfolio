import React, { useState } from 'react';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ project : {title, imageSrc, description, skills, about, info, github} }) => {
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div className={`${styles.container} ${cardOpen ? styles.containerOpen : ''}`}>
            <div className={cardOpen ? styles.condensedContent : ''}>
                <div className={`${styles.cardImage} ${cardOpen ? styles.cardImageOpen : ''}`}>
                    <div />
                    <img
                        src={getImageUrl(imageSrc)}
                        alt={`Image of ${title}`}
                    />
                </div>
                <div className={`${styles.cardContent} ${cardOpen ? styles.cardContentOpen : ''}`}>
                    <div className={styles.cardHeader}>
                        <h3 className={`${styles.title} ${cardOpen ? styles.titleOpen : ''}`}>{title}</h3>
                        <img
                            src={getImageUrl("projects/expand-arrow.png")}
                            alt={"Expand arrow icon"}
                            className={!cardOpen ? styles.arrow : styles.arrowRotate}
                            onClick={() => setCardOpen(!cardOpen)}
                        />
                    </div>
                    <p className={`${styles.description} ${cardOpen ? styles.descriptionOpen : ''}`}>{description}</p>
                    <ul className={`${styles.skills} ${cardOpen ? styles.skillsOpen : ''}`}>{
                        skills.map((skill, id) => {
                            return (
                            <li className={`${styles.skill} ${cardOpen ? styles.skillOpen : ''}`} key={id}>{skill}</li>
                        )})}</ul>
                </div>
            </div>
            <div className={`${styles.expandedSection} ${cardOpen ? styles.expandedSectionOpen : ''}`}>
                <div className={styles.divider} />
                <div className={styles.expandedContent}>
                    <p className={styles.about}>{about}</p>
                    <ul className={styles.infoList}>
                        {info.map((item, id) => (
                            <li className={styles.infoItem} key={id}>{item}</li>
                        ))}
                    </ul>
                    {github && (
                        <a className={styles.githubBtn} href={github} target="_blank" rel="noopener noreferrer">
                            <img
                                src={getImageUrl("projects/github.png")}
                                alt="Github logo"
                            />
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

/* 
export const ProjectCard = ({ project : {title, imageSrc, description, skills, demo, source} }) => {
    // having : {title, ...} allows us to not need to use "project.title" etc 
    // importing { project } is equivalent to this line below when handling props
    //const project = props.project;
    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>{
                skills.map((skill, id) => {
                    return (
                    <li className={styles.skill} key={id}>{skill}</li>
                )})}</ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    )
} */
