import { ADD_TO_CART, ADD_TO_MEDICINES } from "../ActionType"

export const addtocart = (id) => (dispatch) => {
    // console.log(id);
    dispatch({type: ADD_TO_CART, payload: {id: id, qty: 1}})
}