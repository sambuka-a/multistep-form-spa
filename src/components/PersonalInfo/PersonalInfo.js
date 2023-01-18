import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { firstStepData } from '../../store/formSlice';

import styles from './PersonalInfo.module.scss'

const PersonalInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const personalInfoData = useSelector(state => state.form.formData)
  console.log(personalInfoData);

  const [error, setError] = useState(false)

  const handlePersonalInfo = (e) => {
    dispatch(firstStepData({
      [e.target.name]: e.target.value  
    }))
  }

  const handleSubmit = () => {
    navigate("/plan");
  }

  return (
    <div className={styles.personal}>
      <div className={styles.steps}>
        <div className={styles.stepsIcon}>
          <span className={styles.selected}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <form id='personalDataStep' onSubmit={handleSubmit}>
            <label>Name:</label>
              <input
                type='text'
                placeholder='e.g. Stephen King'
                name='userName'
                value={personalInfoData.userName}
                onChange={handlePersonalInfo}
              />
              {}
              <label>Email:</label>
              <input
                type='text'
                placeholder='e.g. stephenking@lorem.com'
                name='userEmail'
                value={personalInfoData.userEmail}
                onChange={handlePersonalInfo}
              />
              <label>Phone number:</label>
              <input
                placeholder='e.g. +1 234 567 890'
                name='phoneNumber'
                value={personalInfoData.phoneNumber}
                onChange={handlePersonalInfo}
              />
          </form>
        </div>
        <div className={styles.footer}>
          <button type ='submit' form='personalDataStep' disabled={error}>Next Step</button>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo