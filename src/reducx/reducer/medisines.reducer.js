import { ADD_MEDICINES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LODING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";


export const initialValues={
    isLoding : false,
    medisines: [],
    error : null,
}

export const medicinesReducer = (state=initialValues, action) => {
    console.log(action);

    switch(action.type){
        case ERROR_MEDICINES:
            return{
                isLoding : false,
                medisines: [],
                error : action.payload,
            }
        case LODING_MEDICINES:
            return{
                isLoding : true,
                medisines: [],
                error : null,
            }
        case GET_MEDICINES:
        return{
            isLoding : false,
            medisines : action.payload,
            error : null,
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
                        if(v.id === action.payload.id){
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


