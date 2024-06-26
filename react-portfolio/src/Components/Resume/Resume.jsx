import React from 'react'
import styles from './Resume.module.css'
import { getImageUrl } from '../../utils'

export const Resume = () => {
    // const config = {
    //     link:
    // }
  return (
    
        <section className={styles.container} id='resume'>
        <h2 className={styles.title}>Resume</h2>
        <div className={styles.conten}>
            <img src={getImageUrl('resume/resume.jpg')} alt="resume image" className={styles.resumeImage}/>

            <div>
                <p className={styles.resumeDownloadTitle}>Resume</p>
                
            <p className={styles.resumeView}>You can view my resume <a href='https://drive.google.com/file/d/14QG4qxX7mYDXZSOb4iPTUW9akNHB5Eft/view?usp=sharing'> Download </a></p>
            </div>
        
        
        </div>
    </section>
    
  )
}
