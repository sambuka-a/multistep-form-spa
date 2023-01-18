import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  const userSelection = useSelector(state => state.form.formData)

  const totalPrice = userSelection.addons.reduce((acc, i) => acc + i.price, 0) + userSelection.planPrice

  return (
    <div>
      <div>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div>
        <div>
          <span>{userSelection.planName} {userSelection.handlePlanDuration === 'yr' ? "(Yearly)" : "(Monthly)"}</span>
          <span>{`$${userSelection.planPrice}/${userSelection.planDuration}`}</span>
          <div>
            <p onClick={() => {navigate('/plan')}}>Change</p>
          </div>
        </div>
        <div>
          {userSelection.addons.map(item => (
            <li>{item.title} ${item.price}/{userSelection.planDuration}</li>
          ))}
        </div>
        <div>
          <span>Total per{userSelection.handlePlanDuration === 'yr' ? "year" : "Month"}</span>
          <span>+{totalPrice}/{userSelection.planDuration}</span>
        </div>
      </div>
      <button onClick={() => {navigate("/addons")}}>Prev</button>
      <button onClick={() => {navigate("/thankYou")}}>Confirm</button>
    </div>
  )
}

export default Summary