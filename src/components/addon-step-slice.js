import { createSlice } from "@reduxjs/toolkit"

const addonStep = createSlice({
    name: "@@addonStep",
    initialState: {
        addons:[
            {
              addonName: 'Online Service',
              addonDetails: 'Access to multiplayer games',
              addonPrice: 1,
              addonId: 0,
              selected: false,
            },
            {
              addonName: 'Larger storage',
              addonDetails: 'Extra 1TB of cloud save',
              addonPrice: 2,
              addonId: 1,
              selected: false,
            },
            {
              addonName: 'Customizable profile',
              addonDetails: 'Custom theme on your profile',
              addonPrice: 2,
              addonId: 2,
              selected: false,
            },    
        ]
    },
    reducers: {
        setAddon(state, action) {
            const index = state.addons.findIndex(i => i.addonId === action.payload)
            
            state.addons[index].selected = true
        },
    }
})

export const {setAddon} = addonStep.actions;

export default addonStep.reducer;