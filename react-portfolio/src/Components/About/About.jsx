import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.conten}>
            <img src={getImageUrl('about/aboutImage.png')} alt="about image" className={styles.aboutImage}/>
        
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/cursorIcon.png')} alt="cursorImg" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div> 
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/serverIcon.png')} alt="serverImg" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized and API's</p>
                </div> 
            </li>
        </ul>
        </div>
    </section>
  )
}
