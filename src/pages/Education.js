import React from 'react'
import styles from "../css-modules/education.module.css"
import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";

export default function Education() {
  return (
    <div className={styles.Container}>

      <form>
        <div className={styles.heading}>
          <h1>Education</h1>
          <h4>Start with your most recent educational institution.</h4>
        </div>

        <div className={styles.frm}>
          <span>School Name</span><br></br>
          <input type="text" />
        </div>

        <div className={styles.frm}>
          <span>Degree</span><br></br>
          <input type="text" />
        </div>
        <div className={styles.row}>

          <div className={styles.column}>
            <div className={styles.frm}>
              <span>City/Town</span><br></br>
              <input className={styles.divide_col} /><br></br>
              <span className={styles.frm}>Graduation Date</span><br></br>
              <input className={styles.divide_col} placeholder='Month' type='month'/><br></br>
              
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.frm}>
              <span>Country</span><br></br>
              <input className={styles.divide_col} /><br></br>
              
            </div>


          </div>
        </div>
        <Link to="/skills">
          <button id={styles.btn}> Save & continue </button>
        </Link>
        <div className={styles.back_link}>
        <Link to="/work">
          <label>/Back</label><br></br>
        </Link>
        </div>
       

      </form>

    </div>
  )
}
