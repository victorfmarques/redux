import { createSlice } from "@reduxjs/toolkit";

const initialUiSliceState = {
    showCart: false
}

const uiSlice = createSlice(
    {
        name: 'ui',
        initialState: initialUiSliceState,
        reducers: {
            toggleShowCart: (state) => { state.showCart = !state.showCart }
        }
    },
)

export const uiActions = uiSlice.actions;

export default uiSlice.reducer