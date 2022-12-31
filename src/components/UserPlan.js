import {useState} from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { secondStepData } from '../store/formSlice';

import IconArcade from '../assets/images/icon-arcade.svg'
import IconAdvanced from '../assets/images/icon-advanced.svg'
import IconPro from '../assets/images/icon-pro.svg'

const UserPlan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      id: 0,
      planName: 'Arcade',
      planPrice: 9,
      dur: 'mo',
      icon: IconArcade,
    },
    {
      id: 1,
      planName: 'Advanced',
      planPrice: 12,
      dur: 'mo',
      icon: IconAdvanced,
    },
    {
      id: 2,
      planName: 'Pro',
      planPrice: 15,
      dur: 'mo',
      icon: IconPro,
    },
  ])

  const [dur, setDur] = useState(false)

  const handlePlan = () => {
    setDur(dur ? false : true)
    let newData = data.map(i => {
      if(!dur) {
        return {...i, dur: 'yr', planPrice: i.planPrice * 10}
      } else {
        return {...i, dur: 'mo', planPrice: i.planPrice / 10}
      }
    })
    setData(newData)
  }



  const onSubmit = (price, name, dur) => {
    dispatch(secondStepData({planPrice: price, planName: name, planDuration: dur}))
  }


  return (
    <div>
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div>
        {data.map(i => (
          <div key={i.id} onClick={() => onSubmit(i.planPrice, i.planName, i.dur)}>
          <img src={i.icon} alt='planImage'/>
          <div>
            <span>{i.planName}</span>
            <span>{`$${i.planPrice}/${i.dur}`}</span>
            {i.dur === "yr" && <span>2 months free</span>}
          </div>
        </div>
        ))}
      </div>
      <div>
        monthly
        <input type="checkbox" onChange={() => {handlePlan()}}/>
        yearly
      </div>
      <button onClick={() => {navigate("/")}}>Prev</button>
        <button onClick={() => {navigate("/addons")}}>Next</button>
    </div>
  )
}

export default UserPlan