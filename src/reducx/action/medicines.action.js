import { json } from "react-router-dom";
import { API_URL } from "../../utils/baseURL";
import { ADD_MEDICINES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LODING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";
import { addMedicinesData, deletMedicinesData, getMedicinesData } from "../../common/api/medicines.api";
import { putRequest } from "../../common/request";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase";


export const getmedicines = () => (dispatch) => {
    try {
        dispatch(logingmedicine());
        return setTimeout(function () {
            getMedicinesData()
                .then(response => dispatch({ type: GET_MEDICINES, payload: response.data }))

                .catch(error => dispatch(errormedicines(error)))    
                .then((response) => console.log(response.data))
            // fetch(API_URL + "medicines")
            //     .then(response => {
            //         if (response.ok) {
            //             return response.json()
            //         }
            //         throw new Error('Something went wrong')
            //     })
            //     .then(data => dispatch({ type: GET_MEDICINES, payload: data }))

            //     .catch(error => dispatch(errormedicines(error)))
        }, 2000)

    } catch (error) {
        dispatch(errormedicines(error))
    }
}


export const deletemedicines = (id) => (dispatch) => {
    try {
        deletMedicinesData(id)
            .then(dispatch({ type: DELETE_MEDICINES, payload: id }))
            .catch(error => dispatch(errormedicines(error)))
        // fetch(API_URL + "medicines/" + id, {
        //     method: "DELETE"
        // })
        //     .then(dispatch({ type: DELETE_MEDICINES, payload: id }))
    } catch (error) {
        console.log(error);
    }
}


export const addmedicines = (data) => async (dispatch) => {
    console.log(data);
    try {
        const docRef = await addDoc(collection(db, "medicines"), data);

        dispatch({ type: ADD_MEDICINES, payload: {...data, id:docRef.id} })

          console.log("Document written with ID: ", docRef.id);
        // addMedicinesData(data)
        //     .then(response => dispatch({ type: ADD_MEDICINES, payload: response.data }))
        //     .catch((error) => console.log(error))
        // fetch(API_URL + "medicines", {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)

        // })
        //     .then(response => response.json())
        //     .then(rdata => dispatch({ type: ADD_MEDICINES, payload: rdata }))
        //     .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updatemedicines = (data) => (dispatch) => {
    console.log(data);
    try {
        updatemedicines(data)
            .then(response => dispatch({ type: UPDATE_MEDICINES, payload: response.data }))
            .catch((error) => console.log(error))
        // fetch(API_URL + "medicines/" + data.id, {
        //     method: "PUT",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)

        // })
        //     .then(response => response.json())
        //     .then(rdata => dispatch({ type: UPDATE_MEDICINES, payload: rdata }))
        //     .catch((error) => console.log(error))
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