import React from 'react'
import styles from './Skills.module.css'
import skills from '../../Components/data/Skills.json';
import { getImageUrl } from '../../utils';

export const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.conten}>
            <div className={styles.skills}>
                {skills.map((skill, id)=>{
                    return(
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.image)} alt="" />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
