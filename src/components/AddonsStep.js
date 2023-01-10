import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { finalStepData } from '../store/formSlice';
import { setAddon } from "./addon-step-slice";

const Addons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const planDuration = useSelector(state => state.form.formData.planDuration)
  console.log(planDuration);
  const addons = useSelector(state => state.addons.addons)

  const onSubmit = () => {
    const selectedAddons = addons.filter(i => i.selected)
    const selectedAddonsTitle = selectedAddons.map(i => i.addonName)
    let selectedAddonsPrice = 0
    if(planDuration === 'yr') {
      selectedAddonsPrice = selectedAddons.reduce((acc, i) => acc + i.addonPrice, 0) * 10
    } else {
      selectedAddonsPrice = selectedAddons.reduce((acc, i) => acc + i.addonPrice, 0)
    }
    dispatch(finalStepData({
      selectedAddons: selectedAddonsTitle,
      addonsTotalPrice: selectedAddonsPrice
    }))
    navigate("/summary");
  }

  const handleCheck = (id) => {
    dispatch((setAddon(id)))
  }

  return (
    <>
      <div>Step three. Addons</div>
      <div>
        {addons.map(i => (
            <div id={i.addonId}>
              <input 
                type="checkbox"
                checked={i.selected}
                onChange={() => handleCheck(i.addonId)}
                />
              <div>
                <span>{i.addonName}</span>
                <span>{i.addonDetails}</span>
              </div>
              <span>{planDuration === 'yr' ? i.addonPrice * 10 : i.addonPrice} {`/ ${planDuration}`}</span>
            </div>
          ))}
          <button onClick={() => {navigate("/plan")}}>Prev</button>
          <button onClick={() => {onSubmit()}}>Next</button>
      </div>
    </>
  )
}

export default Addons