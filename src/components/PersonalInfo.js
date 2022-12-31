import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { firstStepData } from '../store/formSlice';
import {useForm} from 'react-hook-form';

const PersonalInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    dispatch(firstStepData(data))
    reset()
    navigate("/plan");
  }

  return (
    <>
      <div>Step one. Personal Info</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
        <input 
          {...register('name', {
            required: 'This field is required',
            minLength: {
              value: 5,
              message: "Min length 5 symbols"
            },
          })}
        />
        </label>
        <div>{errors?.name && <span>{errors?.name?.message || 'Error'}</span>}</div>

        <label>
          Email
        <input 
          {...register('email', {
            required: 'This field is required',
            minLength: {
              value: 5,
              message: "Min length 5 symbols"
            },
          })}
        />
        </label>
        <div>{errors?.email && <span>{errors?.email?.message || 'Error'}</span>}</div>
        

        <label>
          Phone number
        <input 
          {...register('phoneNumber', {
            required: 'This field is required',
            minLength: {
              value: 5,
              message: "Min length 5 symbols"
            },
          })}
        />
        </label>
        <div>{errors?.phoneNumber && <span>{errors?.phoneNumber?.message || 'Error'}</span>}</div>
       
        <button type ='submit' disabled={!isValid}>Next</button>
      </form>
    </>
  )
}

export default PersonalInfo