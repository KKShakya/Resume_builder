import React, { useState } from 'react'
import Delete from "../images/icons8-delete-30.png"
import Add from "../images/add.svg"
import styles from '../css-modules/skills.module.css'
import {
  Link
} from 'react-router-dom';


export default function Skills() {
  const [formValues, setFormValues] = useState([{ name: "" }])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { name: "" }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  return (

    <div className={styles.Container}>
        <form>

          <div className={styles.heading} >
            <h1>Skills</h1>
            <h4>Add a few skills to show employers what you're good at.</h4>
          </div>

        {formValues.map((element, index) => {
      return (
          <div className={styles.frm} key={index}>
            <input type="text" Placeholder={"Skill" + index}name="name" value={element.name} onChange={e => handleChange(index, e)} />
          
          {
            index ?
              
                <img className={styles.btn_rm}src={Delete} alt="del" onClick={e =>removeFormFields(index)} />
              : null
          }
          </div>
        );
      })}



      <img className={styles.btn_add} src={Add}onClick={e => addFormFields()} alt=""/>

      
          <Link to="/final">
            <button id={styles.btn}> Save & Continue</button><br></br>
          </Link>

          <div className={styles.back_link}>
            <Link to="/education">
              <label>/Back</label><br></br>
            </Link>
          </div>




        </form>
      

    </div>
  )
}







