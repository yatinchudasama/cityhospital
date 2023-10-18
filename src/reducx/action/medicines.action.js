import { API_URL } from "../../utils/baseURL";
import { DELETE_MEDICINES, GET_MEDICINES } from "../ActionType";


export const getmedicines =() => (dispatch) => {
    try{
        fetch(API_URL + "medicines")
        .then(response => response.json())
        .then(data => dispatch({type: GET_MEDICINES, payload:data}))
    } catch(error){
        console.log(error);
    }
}


export const deletemedicines =(id) => (dispatch) => {
    try{
        fetch(API_URL + "medicines/" + id, {
            method: "DELETE"
        })
        .then(() => dispatch({type: DELETE_MEDICINES, payload:id}))
    } catch(error){
        console.log(error);
    }
}