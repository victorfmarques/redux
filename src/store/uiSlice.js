import { createSlice } from "@reduxjs/toolkit";

const initialUiSliceState = {
    cartIsVisible: false
}

const uiSlice = createSlice(
    {
        name: 'ui',
        initialState: initialUiSliceState,
        reducers: {
            togglecartIsVisible: (state) => { state.cartIsVisible = !state.cartIsVisible }
        }
    },
)

export const uiActions = uiSlice.actions;

export default uiSlice.reducer