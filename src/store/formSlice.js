import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
    name: "form",
    initialState: {
        formData:
            {
                userName: '',
                userEmail: '',
                phoneNumber: '',
                planName: '',
                planDuration: '',
                planPrice: 0,
                priceMultiplier: 10,
                addons: [],
            }
    },
    reducers: {
        firstStepData(state, action) {
            state.formData.userName = action.payload.userName
            state.formData.userEmail = action.payload.userEmail
            state.formData.phoneNumber = action.payload.phoneNumber
        },
        secondStepData(state, action) {
            state.formData.planName = action.payload.planName
            state.formData.planPrice = action.payload.planPrice
            const planDuration = action.payload.planIsMonthly
            if(planDuration) {
                state.formData.planDuration = 'mo'
            } else {
                state.formData.planDuration = 'yr'
            }  
        },
        finalStepData(state, action) {
            state.formData.addons = action.payload
        },
    }
})

export const {firstStepData, secondStepData, thirdStepData, finalStepData} = formSlice.actions;

export default formSlice.reducer;
