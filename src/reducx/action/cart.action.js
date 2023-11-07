import { ADD_TO_CART, ADD_TO_MEDICINES, INC_QTY , DEC_QTY} from "../ActionType"

export const addtocart = (id) => (dispatch) => {
    // console.log(id);
    dispatch({type: ADD_TO_CART, payload: {id: id, qty: 1}})
}

export const incrementqty = (id) => (dispatch) => {
    dispatch({type: INC_QTY, payload: id})
}

// export const decrementqty = (id) => (dispatch) => {
//     dispatch({type: DEC_QTY, payload: id})
// }