import {useState} from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { firstStepData } from '../../store/formSlice';

import styles from './PersonalInfo.module.scss'

const PersonalInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [error, setError] = useState({})
  const [info, setInfo] = useState({
    userName: '',
    userEmail: '',
    phoneNumber: '',
  })

  const handlePersonalInfo = (e) => {
    const value = e.target.value
    setInfo({
      ...info,
      [e.target.name] : value  
    })
  }

  const validation = () => {
    let valid = true
    let errors = {}
    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if(!info.userName.match(/^[a-zA-Z]{3,}$/)) {
      valid = false;
      errors['username'] = 'Wrong username'
    } 

    if(!pattern.test(info.userEmail)) {
      valid = false;
      errors['email'] = 'Wrong email'
    } 

    if(!info.phoneNumber.match(/^[0-9]{3,}$/)) {
      valid = false;
      errors['phone'] = 'Wrong phone'
    } 

    setError(errors)
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validation()) {
      dispatch(firstStepData(info))
      navigate("/plan");
    }
  }

  return (
    <div className={styles.personal}>
      <div className={styles.steps}>
        <div className={styles.stepsIcon}>
          <div className={styles.iconDesktop}>
            <span className={styles.selected}>1</span>
            <div className={styles.desktopTitle}>
              <span>step 1</span>
              <p>Your info</p>
            </div>
          </div>
          <span className={styles.selected}>1</span>
          <div className={styles.iconDesktop}>
            <span>2</span>
            <div className={styles.desktopTitle}>
              <span>step 2</span>
              <p>Select plan</p>
            </div>
          </div>
          <span>2</span>
          <div className={styles.iconDesktop}>
            <span>3</span>
            <div className={styles.desktopTitle}>
              <span>step 3</span>
              <p>add-ons</p>
            </div>
          </div>
          <span>3</span>
          <div className={styles.iconDesktop}>
            <span>4</span>
            <div className={styles.desktopTitle}>
              <span>step 4</span>
              <p>Summary</p>
            </div>
          </div>
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
                value={info.userName}
                onChange={handlePersonalInfo}
              />
              {error.username ? <span>{error.username}</span> : <span className={styles.cap}>cap</span>}
              <label>Email:</label>
              <input
                type='text'
                placeholder='e.g. stephenking@lorem.com'
                name='userEmail'
                value={info.userEmail}
                onChange={handlePersonalInfo}
              />
              {error.email ? <span>{error.email}</span> : <span className={styles.cap}>cap</span>}
              <label>Phone number:</label>
              <input
                placeholder='e.g. +1 234 567 890'
                name='phoneNumber'
                value={info.phoneNumber}
                onChange={handlePersonalInfo}
              />
              {error.phone ? <span>{error.phone}</span> : <span className={styles.cap}>cap</span>}
          </form>
        </div>
        <div className={styles.footer}>
          <button type ='submit' form='personalDataStep'>Next Step</button>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
