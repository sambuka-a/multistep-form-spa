import { ReactComponent as Thanks } from '../../assets/images/icon-thank-you.svg';
import styles from './ThankYou.module.scss'

const ThankYou = () => {
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
            <Thanks/>
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou