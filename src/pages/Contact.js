import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "../css-modules/contact.module.css";






export default function Contact() {
 

  return (
    <div className={styles.Container}>

      <form id={styles.contact_frm}>
        <div className={styles.heading}>
          <h1>Tell us about yourself</h1>
          <h4>With this info, recruiters will be able to find you.</h4>
        </div>

        <div className={styles.frm}>
          <span>Name</span><br></br>
          <input type="text" placeholder='Required*'/>
        </div>

        <div className={styles.frm}>
          <span>Email</span><br></br>
          <input type="text" placeholder='Required*' />
        </div>
        <div className={styles.row}>

          <div className={styles.column}>
            <div className={styles.frm}>
            <span>Street Address</span><br></br>
              <input type="text"/><br></br>
              <span>City</span><br></br>
              <input type="text" /><br></br>
              <label>Phone Number</label><br></br>
              <input type="text"  /><br></br>
              
            </div>
          </div>

        </div>
        <Link to="/work">
          <button id={styles.btn}> Save & continue </button>
        </Link>

      </form>

    </div>
  )
}
