import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserPlanDuration, setUserPlanData } from './user-plan-slice'
import { secondStepData } from "../store/formSlice";

const UserPlan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userPlanFormData = useSelector(state => state.userPlan.userPlans)
  const planDuration = useSelector(state => state.userPlan.userPlanDuration.dur)
  const selectedPlan = useSelector(state => state.userPlan.userPlans.filter(i => i.selected))
  console.log(selectedPlan);

  const handlePlanDuration = () => {
    dispatch(setUserPlanDuration(
      planDuration === 'mo' ? 'yr' : 'mo'
    ))
  }

  const handleUserSelect = (id) => {
    dispatch(setUserPlanData(id))
  }

  const onSubmit = () => {
    dispatch(secondStepData({
      planName: selectedPlan[0].planName, 
      planPrice: selectedPlan[0].planPrice, 
      planDuration
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
            <span>{`$${i.planPrice}/${planDuration}`}</span>
            {planDuration === "yr" && <span>2 months free</span>}
          </div>
        </div>
        ))}
      </div>
      <div>
        monthly
        <input type="checkbox" onChange={() => {handlePlanDuration()}}/>
        yearly
      </div>
      <button onClick={() => {navigate("/")}}>Prev</button>
      <button onClick={() => {onSubmit()}}>Next</button>
    </div>
  )
}

export default UserPlan