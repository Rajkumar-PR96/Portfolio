import React from 'react'
import styles from './Hero.module.css'
import {getImageUrl} from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.conten}>
            <h1 className={styles.title}>Hi, I'm Rajkumar</h1>
            <p className={styles.description}>I'm a full-stack developer</p>
            <a href="mailto:rajkumarcse2000@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="hero image"  className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
       
    </section>
  )
}
