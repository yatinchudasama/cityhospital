import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deletMedicinesData, getMedicinesData } from "../common/api/medicines.api"


const initialState = {
    isLoding : false,
    medisines: [],
    error : null,
}

export const getmedicines = createAsyncThunk(
    'medisines/get',
    async()=>{
        await new Promise ((resolve, reject) => setTimeout(resolve, 2000))
        let response = await getMedicinesData()
        console.log(response);

        return response.data
    }
)

export const deletemedicines = createAsyncThunk(
    'medisines/deletemedicines',
    
    async (id) => {
        let response = await deletMedicinesData()

        return id;
    }
)



const onLoding = (state, action) => {
    state.isLoding = true;
    state.error = null;
}

const onError = (state, action) => {
    state.isLoding = false;
    state.error = action.error.message;
}

export const medisinSlice = createSlice({
    name:'medisines',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getmedicines.pending, onLoding)
        builder.addCase(getmedicines.fulfilled,(state, action) => {
            console.log(action);
            state.medisines = action.payload;
            state.error = null;
            state.isLoding = false;
        })
        builder.addCase(getmedicines.rejected, onError)
        builder.addCase(deletemedicines.fulfilled,(state, action) => {
            state.medisines = state.medisines.filter((v) => v.id !== action.payload)
        })
    }
})

export default medisinSlice.reducer