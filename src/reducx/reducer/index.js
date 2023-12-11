import { combineReducers } from "redux";


import { cartReducer } from "./cart.reducer";
import counterReducer from "../../slice/counter.slice";
import medisinReducer from "../../slice/medisin.slice";
import { signupReducer } from "./auth.reducer";
import alertSlice from "../../slice/alert.slice";
import  aptSlice  from "../../slice/appointment.slice";






export const rootReduce = combineReducers({
    counetr: counterReducer,
    medisines: medisinReducer,
    cart:cartReducer,
    auth: signupReducer,
    alert: alertSlice,
    apt: aptSlice
    
})
