import React from 'react';

import styles from "./Experience.module.css";
// use json files to make it easier to alter experience section in the future as it changes
import skills from "../../data/skills.json";  // skills is now an array variable
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{
          skills.map((skill, id) => { // when iterating through array, need to give every elem an id
              return (
              <div className={styles.skill} key={id}> 
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div >
                <p>{skill.title}</p>
              </div>
          )})
        }</div>
        <ul className={styles.history}>{
            history.map((historyItem, id) => {
              return (
              <li className={styles.historyItem} key={id}>
                <img 
                  src={getImageUrl(historyItem.imageSrc)} 
                  alt={`${historyItem.organisation} Logo`} 
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>{historyItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li> })}
                  </ul>
                </div>
              </li>
            )})
        }</ul>
      </div>
    </section>
  )
}
