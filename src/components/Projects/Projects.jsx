import React from 'react';

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';
import { getImageUrl } from '../../utils';

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
        <div className={styles.title}>
            <h2>Projects</h2>
            <div />
        </div>
        <div className={styles.projects}>{
            projects.map((project, id) => {
                return (
                    <ProjectCard key={id} project={project} />
            )    
        })}</div>
        <div className={styles.footer}>
            <div className={styles.footerContent}>
              <img
                src={getImageUrl("projects/clock-yellow.png")}
                alt="Clock icon"
              />
              <p>More projects coming soon!</p>
            </div>
            <div className={styles.line} />
        </div>
    </section>
    /*
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>{
            projects.map((project, id) => {
                return (
                    <ProjectCard key={id} project={project} />
            )    
        })}</div>
    </section> */
  )
}
