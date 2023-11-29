import { combineReducers } from "redux";


import { cartReducer } from "./cart.reducer";
import counterReducer from "../../slice/counter.slice";
import medisinReducer from "../../slice/medisin.slice";
import { signupReducer } from "./auth.reducer";



export const rootReduce = combineReducers({
    counetr: counterReducer,
    medisines: medisinReducer,
    cart:cartReducer,
    auth: signupReducer
})
