import { configureStore } from "@reduxjs/toolkit";

import cartSliceReducers from "./cartSlice";
import uiSliceReducers from "./uiSlice";


const store = configureStore(
    {
        reducer: {
            cart: cartSliceReducers,
            ui: uiSliceReducers
        }
    }
)

export default store;