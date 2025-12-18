import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movie-reducer'
const store = configureStore({
    reducer:{
        movies : movieReducer 
    }
})

export default store