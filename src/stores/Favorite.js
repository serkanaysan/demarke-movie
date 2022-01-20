import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        value: window.localStorage.getItem('favorites') || [],
    },
    reducers: {
        add: state => {
            state.value += 1
        },
        removeById: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = favoriteSlice.actions

export default favoriteSlice.reducer