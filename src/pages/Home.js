import React from 'react'
import styles from '../css-modules/home.module.css'
import Resume from '../images/resume_img.webp'
import {
  Link
} from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.Container}>

      <div className={styles.left}>
       <div className={styles.lf_wrapper}>
        <ul>
          <li>Fill your details in the provided froms step-by-step. </li>
         
          <li>Select a recruiter approved template that will get your resume noticed.</li>
          
          <li>Download or print your new resume!</li>
          
        </ul>
        <Link to="/contact"><button className={styles.create}>
          Continue
        </button></Link>
        </div>

      </div>
      <div className={styles.right}>
        <img src={Resume} alt='Resume'/>
      </div>

    </div>
  )
}
