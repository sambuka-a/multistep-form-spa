import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserPlanDuration, setUserPlanData } from './user-plan-slice'
import { secondStepData } from "../../store/formSlice";

import styles from './UserPlan.module.scss'

const UserPlan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userPlanFormData = useSelector(state => state.userPlan.userPlans)
  const planIsMonthly = useSelector(state => state.userPlan.userPlanIsMonthly)
  console.log(planIsMonthly);
  const selectedPlan = useSelector(state => state.userPlan.userPlans.filter(i => i.selected))

  const handlePlanDuration = () => {
    dispatch(setUserPlanDuration(
      planIsMonthly ? false : true
    ))
  }

  const handleUserSelect = (id) => {
    dispatch(setUserPlanData(id))
  }

  const onSubmit = () => {
    dispatch(secondStepData({
      planName: selectedPlan[0].planName, 
      planPrice: selectedPlan[0].planPrice, 
      planIsMonthly
    }))
    navigate("/addons")
  }

  return (
    <div className={styles.plan}>
      <div className={styles.steps}>
        <div className={styles.stepsIcon}>
          <span>1</span>
          <span className={styles.selected}>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <div className={styles.cards}>
            {userPlanFormData.map(i => (
              <div className={i.selected ? `${styles.card} ${styles.active}` : styles.card} key={i.id} onClick={() => {handleUserSelect(i.id)}}>
              <img src={i.icon} alt='planImage'/>
              <div className={styles.planDetails}>
                <span className={styles.planTitle}>{i.planName}</span>
                <span>{`$${i.planPrice}/${planIsMonthly ? 'mo' : 'yr'}`}</span>
                {!planIsMonthly && <span className={styles.freeBadge}>2 months free</span>}
              </div>
            </div>
            ))}
          </div>
          <div className={styles.durSelector}>
            <span className={!planIsMonthly && `${styles.selected}`}>Monthly</span>
            <input 
              type="checkbox"
              checked={!planIsMonthly} 
              onChange={() => {handlePlanDuration()}}/>
            <span className={planIsMonthly && `${styles.selected}`}>Yearly</span>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.prev} onClick={() => {navigate("/")}}>Go Back</button>
          <button onClick={() => {onSubmit()}}>Next Step</button>
        </div>
      </div>
    </div>
  )
}

export default UserPlan