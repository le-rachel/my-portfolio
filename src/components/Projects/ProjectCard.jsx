import React, { useState } from 'react';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ project : {title, imageSrc, description, skills, about, info} }) => {
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.cardImage}>
                <div />
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <h3>{title}</h3>
                    <img src={getImageUrl("projects/expand-arrow.png")} alt={"Expand arrow icon"} />
                </div>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>{
                    skills.map((skill, id) => {
                        return (
                        <li className={styles.skill} key={id}>{skill}</li>
                    )})}</ul>
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
