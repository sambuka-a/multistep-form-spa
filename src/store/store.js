import { configureStore } from "@reduxjs/toolkit";
import formReducer from './formSlice'
import userPlanReducer from '../components/user-plan-slice'
import addonStepReducer from '../components/addon-step-slice'

export default configureStore({
    reducer: {
        form: formReducer,
        userPlan: userPlanReducer,
        addons: addonStepReducer,
    }
})