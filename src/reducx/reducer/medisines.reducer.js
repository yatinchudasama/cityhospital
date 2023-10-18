import { DELETE_MEDICINES, GET_MEDICINES } from "../ActionType";


export const initialValues={
    isLoding : false,
    medisines: [],
    erroe : null,
}

export const medicinesReducer = (state=initialValues, action) => {
    console.log(action);

    switch(action.type){
        case GET_MEDICINES:
        return{
            ...state,
            medisines : action.payload
        }

        case DELETE_MEDICINES:
            return{
                ...state,
                medisines : state.medisines.filter((v) => v.id !== action.payload)
            }
        default:
            return state
    }

    // return state;
}


