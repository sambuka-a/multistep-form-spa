import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { finalStepData } from '../../store/formSlice';
import { setAddon } from "./addon-step-slice";

import styles from './Addons.module.scss'

const Addons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const planDuration = useSelector(state => state.form.formData.planDuration)
  const priceMultiplier = useSelector(state => state.form.formData.priceMultiplier)
  const addons = useSelector(state => state.addons.addons)

  const onSubmit = () => {
    const selectedAddons = addons.filter(i => i.selected).map(item => {
      if(planDuration === 'mo') {
        return ({title: item.addonName, price: item.addonPrice})
      } else {
        return ({title: item.addonName, price: item.addonPrice * priceMultiplier})
      }
    })

    dispatch(finalStepData(selectedAddons))
    navigate("/summary");
  }

  const handleCheck = (id) => {
    dispatch((setAddon(id)))
  }

  return (
    <div className={styles.addons}>
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
                <span className={styles.selected}>3</span>
                <div className={styles.desktopTitle}>
                  <span>step 3</span>
                  <p>add-ons</p>
                </div>
              </div>
              <span className={styles.selected}>3</span>
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
            <h1>Pick add-ons</h1>
            <p>Add-ons help enchance your gaming experience.</p>
          </div>
          <div className={styles.cards}>
            {addons.map(i => (
                <div className={i.selected ? `${styles.card} ${styles.active}` : styles.card} key={i.addonId}>
                  <div className={styles.checkAndName}>
                    <input 
                      type="checkbox"
                      checked={i.selected}
                      onChange={() => handleCheck(i.addonId)}
                      />
                    <div className={styles.planDetails}>
                      <span className={styles.planTitle}>{i.addonName}</span>
                      <span>{i.addonDetails}</span>
                    </div>
                  </div>
                  <span className={styles.price}>+{planDuration === 'yr' ? i.addonPrice * priceMultiplier : i.addonPrice}{`/${planDuration}`}</span>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.prev} onClick={() => {navigate("/plan")}}>Go Back</button>
          <button onClick={() => {onSubmit()}}>Next Step</button>
        </div>
      </div>
    </div>
  )
}

export default Addons