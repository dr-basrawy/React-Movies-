import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/language"
import {CounterReducer} from "./slices/ccounter"
import tReducer from "./slices/trendingmovis"

const store=configureStore({
    reducer: {
    language:languageReducer,
    counter:CounterReducer,
    // tmovie : tReducer         //bug i cant fix when  this line run  make  arr 



    
    }
})


export default store