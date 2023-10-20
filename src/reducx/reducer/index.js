import { combineReducers } from "redux";
import { counterReducer } from './counter.reducer'
import { medicinesReducer } from "./medisines.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReduce = combineReducers({
    counetr: counterReducer,
    medisines: medicinesReducer,
    cart: cartReducer
})
