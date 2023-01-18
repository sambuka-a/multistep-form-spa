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
    const selectedAddons = addons.filter(i => i.selected).map(item => ({title: item.addonName, price: item.addonPrice}))
    console.log(selectedAddons);
  
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
          <span>1</span>
          <span>2</span>
          <span className={styles.selected}>3</span>
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
                <div className={styles.card} key={i.addonId}>
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