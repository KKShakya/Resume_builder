import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "../css-modules/work.module.css";






export default function Work() {
 

  return (
    <div className={styles.Container}>

      <form>
        <div className={styles.heading}>
          <h1>Work Experience</h1>
          <h4>Start with your most recent position</h4>
        </div>

        <div className={styles.frm}>
          <span>Job Title</span><br></br>
          <input type="text" />
        </div>

        <div className={styles.frm}>
          <span>Company</span><br></br>
          <input type="text" />
        </div>
        <div className={styles.row}>

          <div className={styles.column}>
            <div className={styles.frm}>
              <span>City/Town</span><br></br>
              <input className={styles.divide_col} /><br></br>
              <label>Start Date</label><br></br>
              <input  className={styles.divide_col}type="month"  /><br></br>
              
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.frm}>
              <span>Country</span><br></br>
              <input  className={styles.divide_col} /><br></br>
              <span>End Date</span><br></br>
              <input  className={styles.divide_col}placeholder='Month' type="month" /><br></br>
             
            </div>


          </div>
        </div>
        <Link to="/education">
          <button id={styles.btn}> Enter Job Description </button>
        </Link>
        <div className={styles.back_link}>
        <Link to="/contact">
          <label>/Back</label><br></br>
        </Link>
        </div>

      </form>

    </div>
  )
}
