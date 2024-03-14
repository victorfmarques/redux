import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import authReducer from './authSlice';


// sets store with configureStore method, making it possible to export
// multiple slices reducers
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    }
});


export default store;