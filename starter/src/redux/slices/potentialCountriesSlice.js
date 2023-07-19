import { createSlice } from '@reduxjs/toolkit'

export const potentialCountriesSlice = createSlice({
    name: 'potentialCountries',
    initialState: {
        value: [
            {
                name: {
                    common: 'America'
                }
            }
        ]
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload
        },
        deletePotentialCounties: (state) => {
            state.value = null
        },
    },
});

export const { setPotentialCountries, deletePotentialCounties } = potentialCountriesSlice.actions;

export const selectPotentials = (state) => state.potentialCountries.value;

export default potentialCountriesSlice.reducer;