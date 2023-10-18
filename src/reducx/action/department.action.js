import { API_URL } from "../../utils/baseURL";
import { GET_DEPARTMENT } from "../ActionType";


export const getdepartment = () => (dispatch) => {
    try{
        fetch(API_URL + "department")
        .then(response => response.json())
        .then(data => dispatch({type: GET_DEPARTMENT, payload: data}))

    } catch(error){
        console.log(error);
    }
}