import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { finalStepData } from '../store/formSlice';
import { setAddon } from "./addon-step-slice";

const Addons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const planDuration = useSelector(state => state.form.formData.planDuration)
  const addons = useSelector(state => state.addons.addons)
  console.log(planDuration);
  

  const onSubmit = (data) => {
    dispatch(finalStepData(data))
    navigate("/summary");
  }

  const handleCheck = (id) => {
    console.log(id);
    dispatch((setAddon(id)))
  }

  const handleSubmit = () => {
    
  };

  return (
    <>
      <div>Step three. Addons</div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <span>{i.addonPrice}</span>
            </div>
          ))}
          <button onClick={() => {navigate("/plan")}}>Prev</button>
          <button onClick={() => {navigate("/finishing")}}>Next</button>
      </form>
    </>
  )
}

export default Addons