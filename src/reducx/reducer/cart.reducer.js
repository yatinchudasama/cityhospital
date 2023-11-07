import { ADD_TO_CART, ADD_TO_MEDICINES, INC_QTY } from "../ActionType"

export const initialValues = {
    isLoding: false,
    cart: [],
    error: null,
}

export const cartReducer = (state = initialValues, action) => {
    console.log(action);
    switch (action.type) {
        case INC_QTY:
            let index1 = state.cart.findIndex((v) => v.id === action.payload)
            state.cart[index1].qty++
            return {
                cart: state.cart
            }
        case ADD_TO_CART:
            let check = state.cart.some((v) => v.id === action.payload.id)
            console.log(check);

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++
                console.log(index);
            } else {
                state.cart.push((action.payload))
            }
            return {
                cart: state.cart
            }
        // case DEC_QTY ;
        //     let index2 = state.cart.findIndex((v) => v.id === action.payload)

        //     if(state.cart[index2].qty > 1){
        //         state.cart[index2].qty
        //     }
        default:
            return state
    }
}