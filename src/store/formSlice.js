import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
    name: "form",
    initialState: {
        formData:
            {
                userName: '',
                userEmail: '',
                phoneNumber: null,
                planName: null,
                planDuration: null,
                planPrice: 0,
                priceMultiplier: 10,
                addons: null,
            }
    },
    reducers: {
        firstStepData(state, action) {
            state.formData.userName = action.payload.name
            state.formData.userEmail = action.payload.email
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
            console.log(action.payload);
            state.formData.addons = action.payload
        },
    }
})

export const {firstStepData, secondStepData, thirdStepData, finalStepData} = formSlice.actions;

export default formSlice.reducer;
