import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thirdStepData } from '../store/formSlice';
import {useForm} from 'react-hook-form';

const Addons = () => {
  const [addon, setAddon] = useState([
    {
      addonName: 'Online Service',
      addonDetails: 'Access to multiplayer games',
      addonPrice: 1,
      addonId: 0,
    },
    {
      addonName: 'Larger storage',
      addonDetails: 'Extra 1TB of cloud save',
      addonPrice: 2,
      addonId: 1,
    },
    {
      addonName: 'Customizable profile',
      addonDetails: 'Custom theme on your profile',
      addonPrice: 2,
      addonId: 2,
    },
  ])

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const onSubmit = (data) => {
    dispatch(thirdStepData(data))
    navigate("/summary");
  }

  const handleSubmit = () => {};

  return (
    <>
      <div>Step three. Addons</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {addon.map(i => (
            <div id={i.addonId}>
              <input type="checkbox"/>
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