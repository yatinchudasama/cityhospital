import { combineReducers } from "redux";
import { counterReducer } from './counter.reducer'
import { medicinesReducer } from "./medisines.reducer";
import { departmentReducer } from "./department.reducer";

export const rootReduce = combineReducers({
    counetr: counterReducer,
    medisines: medicinesReducer,
    department: departmentReducer
})
