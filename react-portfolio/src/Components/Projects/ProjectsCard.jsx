import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './ProjectsCard.module.css';

export const ProjectsCard = ({ project : {title, image, description, skills} }) => {
  return (
    <div className={styles.container}>
       <img src={getImageUrl(image)} alt="image" className={styles.image} />
       <h3 className={styles.title}>{title}</h3>
       <p className={styles.description}>{description}</p>
       <ul className={styles.skills}>{skills.map((skill, id)=>{
       return <li key={id} className={styles.skill}>{skill}</li>
            })}</ul>
    </div>
  )
}
