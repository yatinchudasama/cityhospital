import { GET_DEPARTMENT } from "../ActionType"


export const initialValues ={
    isLoding : false,
    department: [],
    error: null,
}

export const departmentReducer = (state=initialValues, action) => {
    console.log(action);
    switch(action.type){
        case GET_DEPARTMENT:
            return{
                ...state,
                department : action.payload
            }
        default:
            return state
    }
}