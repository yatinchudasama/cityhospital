import { ADD_TO_CART, ADD_TO_MEDICINES } from "../ActionType"

export const initialValues = {
    isLoding: false,
    cart: [],
    error: null,
}

export const cartReducer = (state = initialValues, action) => {
    console.log(action);
    switch (action.type) {
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

        default:
            return state
    }
}