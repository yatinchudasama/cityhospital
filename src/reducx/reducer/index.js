import { combineReducers } from "redux";
import { counterReducer } from './counter.reducer'

export const rootReduce = combineReducers({
    counetr: counterReducer
})