import { createSlice } from "@reduxjs/toolkit"

const userPlanSlice = createSlice({
    name: "@@userPlan",
    initialState: {
        userPlanIsMonthly: true,
        userPlans:[
            {
              id: 0,
              planName: 'Arcade',
              planPrice: 9,
              icon: 'images/icon-arcade.svg',
              selected: true,
            },
            {
              id: 1,
              planName: 'Advanced',
              planPrice: 12,
              icon: 'images/icon-advanced.svg',
              selected: false,
            },
            {
              id: 2,
              planName: 'Pro',
              planPrice: 15,
              icon: 'images/icon-pro.svg',
              selected: false,
            }
        ]
    },
    reducers: {
        setUserPlanDuration(state, action) {
            const planDuration = action.payload;
            state.userPlanIsMonthly = planDuration;
            state.userPlans.map(i => {
                if (planDuration) {
                    i.planPrice = i.planPrice / 10
                } else {
                    i.planPrice = i.planPrice * 10
                }
            })
        },
        setUserPlanData(state, action) {
            const id = action.payload
            state.userPlans.map(i => i.selected = false)
            const index = state.userPlans.findIndex(i => i.id === id)
            state.userPlans[index].selected = true
        },
    }
})

export const {setUserPlanData, setUserPlanDuration} = userPlanSlice.actions;

export default userPlanSlice.reducer;