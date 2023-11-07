import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addtocart: (state, action) => {
            console.log(action);
            let check = state.cart.some((v) => v.id === action.payload.id)
            console.log(check);

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++
                console.log(index);
            } else {
                state.cart.push((action.payload))
            }
        },
        incrementqty: (state, action) => {
            let index1 = state.cart.findIndex((v) => v.id === action.payload)
            state.cart[index1].qty++
        }
    }

})

export const { addtocart, incrementqty } = cartSlice.actions

export default cartSlice.reducer