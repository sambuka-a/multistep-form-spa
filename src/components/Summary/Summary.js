import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from './Summary.module.scss'

const Summary = () => {
  const navigate = useNavigate();
  const userSelection = useSelector(state => state.form.formData)

  const totalPrice = userSelection.addons.reduce((acc, i) => acc + i.price, 0) + userSelection.planPrice

  return (
    <div className={styles.summary}>
      <div className={styles.steps}>
        <div className={styles.stepsIcon}>
          <div className={styles.iconDesktop}>
              <span>1</span>
              <div className={styles.desktopTitle}>
                <span>step 1</span>
                <p>Your info</p>
              </div>
            </div>
            <span>1</span>
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
              <span className={styles.selected}>4</span>
              <div className={styles.desktopTitle}>
                <span>step 4</span>
                <p>Summary</p>
              </div>
            </div>
            <span className={styles.selected}>4</span>
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </div>
          <div className={styles.details}>
            <div className={styles.plan}>
              <div className={styles.planSummary}>
                <span className={styles.planTitle}>{userSelection.planName} {userSelection.planDuration === 'yr' ? "(Yearly)" : "(Monthly)"}</span>
                <span className={styles.planChange} onClick={() => {navigate('/plan')}}>Change</span>
              </div>       
              <span className={styles.planPrice}>{`$${userSelection.planPrice}/${userSelection.planDuration}`}</span>
            </div>
            <div className={styles.addons}>
              {userSelection.addons.map(item => (
                <div key={item.title} className={styles.addon}>
                  <span className={styles.addonTitle}>{item.title}</span>
                  <span>+${item.price}/{userSelection.planDuration}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.total}>
            <span className={styles.totalTitle}>Total (per  {userSelection.planDuration === 'yr' ? "year" : "Month"})</span>
            <span>+{totalPrice}/{userSelection.planDuration}</span>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.prev} onClick={() => {navigate("/addons")}}>Go Back</button>
          <button onClick={() => {navigate("/thankyou")}}>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Summary