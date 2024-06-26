import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="email icon" />

                <a href="mailto:rajkumar96cse@gmail.com">rajkumar96cse@gmail.com</a>
            </li>

            <li className={styles.link} >
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedin icon" />

                <a href="https://www.linkedin.com/in/rajkumar-p-13760930a/">linkedin.com/in/rajkumar-p-13760930a/</a>
            </li>

            <li className={styles.link}u>
                <img src={getImageUrl('contact/githubIcon.png')} alt="github icon" />

                <a href="https://github.com/Rajkumar-PR96">github.com/rajkumar</a>
            </li>
        </ul>
    </footer>
)}
