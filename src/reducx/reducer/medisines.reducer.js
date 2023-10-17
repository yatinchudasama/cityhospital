import { ADD_MEDICINES, DELETE_MEDICINES, GET_MEDICINES, UPDATE_MEDICINES } from "../ActionType";


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

        case ADD_MEDICINES:
            return{
                ...state,
                medisines : state.medisines.concat(action.payload)
            }
        
            case UPDATE_MEDICINES:
                return{
                    ...state,
                    medisines : state.medisines.map((v) => {
                        if(action.payload.id){
                            return action.payload
                        }else{
                            return v
                        }
                    })
                }
            default:
            return state
    }

    // return state;
}


