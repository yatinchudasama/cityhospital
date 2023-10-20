import { json } from "react-router-dom";
import { API_URL } from "../../utils/baseURL";
import { ADD_MEDICINES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LODING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";


export const getmedicines = () => (dispatch) => {
    try {
        dispatch(logingmedicine());
        return setTimeout(function () {
            fetch(API_URL + "medicines")
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('Something went wrong')
                })
                .then(data => dispatch({ type: GET_MEDICINES, payload: data }))

                .catch(error => dispatch(errormedicines(error)))
        }, 2000)

    } catch (error) {
        dispatch(errormedicines(error))
    }
}


export const deletemedicines = (id) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + id, {
            method: "DELETE"
        })
            .then(dispatch({ type: DELETE_MEDICINES, payload: id }))
    } catch (error) {
        console.log(error);
    }
}


export const addmedicines = (data) => (dispatch) => {
    console.log(data);
    try {
        fetch(API_URL + "medicines", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(rdata => dispatch({ type: ADD_MEDICINES, payload: rdata }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updatemedicines = (data) => (dispatch) => {
    console.log(data);
    try {
        fetch(API_URL + "medicines/" + data.id, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(rdata => dispatch({ type: UPDATE_MEDICINES, payload: rdata }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const logingmedicine = () => (dispatch) => {
    dispatch({ type: LODING_MEDICINES })
}

export const errormedicines = (error) => (dispatch) => {
    dispatch({ type: ERROR_MEDICINES, payload: error.message })
}