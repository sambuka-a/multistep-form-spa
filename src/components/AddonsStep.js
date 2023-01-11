import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { finalStepData } from '../store/formSlice';
import { setAddon } from "./addon-step-slice";

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
              <span>{planDuration === 'yr' ? i.addonPrice * priceMultiplier : i.addonPrice}{`/${planDuration}`}</span>
            </div>
          ))}
          <button onClick={() => {navigate("/plan")}}>Prev</button>
          <button onClick={() => {onSubmit()}}>Next</button>
      </div>
    </>
  )
}

export default Addons