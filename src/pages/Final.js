import React from "react";

import styles from '../css-modules/Final.module.css'
export default function Final() {
  return (
    <div className={styles.Container}>

      {/* this is left partition */}
      <div className={styles.left}>
        <div className={styles.left_wrapper}>
          <div className={styles.sect}>
            <div id={styles.initials}>
              <span>krishna</span>
            </div>
          </div>
          <div className={styles.sect}>Summary</div>
          <div className={styles.sect}>Education</div>
          <div className={styles.sect}>Work Experience</div>
          <div className={styles.sect}>Skills</div>
        </div>

      </div>






      {/* this is right partition divided into 3 sections heading,formatter and sectional*/}
      <div className={styles.right}>
        <div className={styles.Right_wrapper}>

          <div className={styles.top_headings}>
            <div className={styles.headings}>
              <h1>Here’s Your Resume!</h1>
              <h4>What's Next!</h4>
              <label style={{fontWeight: '500'}}>Export Options</label>
            </div>

            <button id={styles.btn} style={{background:"#65C18C"}}>Download</button>
            <button id={styles.btn}>Print</button>
            <button id={styles.btn}>Email</button>
          </div>

          <div className={styles.Formatter}>

            <label style={{fontWeight: 'bold'}}>Formatting Options</label><br></br>
            <label style={{fontWeight: '500'}}>Layout</label><br></br>
            <div className={styles.layout_btn}>
              <button id={styles.frmat}>Condensed</button>
              <button id={styles.frmat}>Standard</button>
              <button id={styles.frmat}>Exapnded</button>
            </div>
            <div className="font_btn">

            <label style={{fontWeight: '500'}}>Font</label><br></br>
            <button id={styles.frmat}>Condensed</button>
              <button id={styles.frmat}>Standard</button>
              <button id={styles.frmat}>Exapnded</button>
            </div>
            <label style={{fontWeight: '500'}}>Color</label><br></br>
            <div className={styles.color_btn}>
              <span id={styles.colr} style={{background: "gray"}}></span>
              <span id={styles.colr} style={{background: "blue"}}></span>
              <span id={styles.colr} style={{background: "orange"}}></span>
              <span id={styles.colr} style={{background: "black"}}></span>
              <span id={styles.colr} style={{background: "purple"}}></span>
              <span id={styles.colr} style={{background: "violet"}}></span>
              <span id={styles.colr} style={{background: "olive"}}></span>
              <span id={styles.colr} style={{background: "pink"}}></span>
            </div>
          </div>

          <div className={styles.Sectional}>
            <button id={styles.btn}>Change Template</button>
          </div>
        </div>
      </div>

    </div>
  )
}