import { json } from "react-router-dom";
import { API_URL } from "../../utils/baseURL";
import { ADD_MEDICINES, DELETE_MEDICINES, GET_MEDICINES, UPDATE_MEDICINES } from "../ActionType";


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
        .then( dispatch({type: DELETE_MEDICINES, payload:id}))
    } catch(error){
        console.log(error);
    }
}


export const addmedicines = (data) => (dispatch) => {
    console.log(data);
    try{
        fetch(API_URL + "medicines", {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then(rdata => dispatch({type: ADD_MEDICINES, payload: rdata}))
        .catch((error) => console.log(error))
    } catch(error){
        console.log(error);
    }
}

export const  updatemedicines = (data) => (dispatch) => {
    console.log(data);
    try{
        fetch(API_URL + "medicines/" + data.id, {
            method: "PUT",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then(rdata => dispatch({type: UPDATE_MEDICINES, payload: rdata}))
        .catch((error) => console.log(error))
    } catch(error){
        console.log(error);
    }
}