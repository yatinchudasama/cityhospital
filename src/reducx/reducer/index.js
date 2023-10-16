import { combineReducers } from "redux";
import { counterReducer } from './counter.reducer'
import { medicinesReducer } from "./medisines.reducer";

export const rootReduce = combineReducers({
    counetr: counterReducer,
    medisines: medicinesReducer
})
