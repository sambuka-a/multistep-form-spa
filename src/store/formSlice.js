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
                onlineService: '',
                additionalStorage: '',
                customizableProfile: '',
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
            state.formData.planDuration = action.payload.planDuration
        },
        thirdStepData(state, action) {
            state.formData.push({thirdStep: action.payload})
        },
        finalStepData(state, action) {
            state.formData.push({forthStep: action.payload})
        },
    }
})

export const {firstStepData, secondStepData, thirdStepData, finalStepData} = formSlice.actions;

export default formSlice.reducer;