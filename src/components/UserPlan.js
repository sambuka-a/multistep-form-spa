import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserPlanDuration, setUserPlanData } from './user-plan-slice'
import { secondStepData } from "../store/formSlice";

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
    <div>
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div>
        {userPlanFormData.map(i => (
          <div key={i.id} onClick={() => {handleUserSelect(i.id)}}>
          <img src={i.icon} alt='planImage'/>
          <div>
            <span>{i.planName}</span>
            <span>{`$${i.planPrice}/${planIsMonthly ? 'mo' : 'yr'}`}</span>
            {!planIsMonthly && <span>2 months free</span>}
          </div>
        </div>
        ))}
      </div>
      <div>
        monthly
        <input 
          type="checkbox"
          checked={!planIsMonthly} 
          onChange={() => {handlePlanDuration()}}/>
        yearly
      </div>
      <button onClick={() => {navigate("/")}}>Prev</button>
      <button onClick={() => {onSubmit()}}>Next</button>
    </div>
  )
}

export default UserPlan