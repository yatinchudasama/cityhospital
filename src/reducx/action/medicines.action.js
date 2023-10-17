import { API_URL } from "../../utils/baseURL";
import { GET_MEDICINES } from "../ActionType";


export const getmedicines =() => (dispatch) => {
    try{
        fetch(API_URL + "medicines")
        .then(response => response.json())
        .then(data => dispatch({type: GET_MEDICINES, payload:data}))
    } catch(error){
        console.log(error);
    }
}


export const deletemedicines =() => (dispatch) => {
    try{
        fetch(API_URL + "medicines")
        .then(response => response.json())
        .then(data => dispatch({type: GET_MEDICINES, payload:data}))
    } catch(error){
        console.log(error);
    }
}