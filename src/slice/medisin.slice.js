import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deletMedicinesData, getMedicinesData } from "../common/api/medicines.api"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../firebase"


const initialState = {
    isLoding: false,
    medisines: [],
    error: null,
}

export const getmedicines = createAsyncThunk(
    'medisines/get',
    async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000))
        // let response = await getMedicinesData()
        // console.log(response);

        let data = [];

        const querySnapshot = await getDocs(collection(db, "medicines"));
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        })
        return data;

        // return response.data
    }
)

export const deletemedicines = createAsyncThunk(
    'medisines/deletemedicines',

    async (id) => {
        // let response = await deletMedicinesData()

        // return id;



        await deleteDoc(doc(db, "medicines", id));

        return id;

    }
)

export const addmedicines = createAsyncThunk(
    'medisines/add',

    async (data) => {

        console.log(data);

        try{
            const deocRef = await addDoc(collection(db, "medicines"), data);
            console.log("yyyyuuu ID: ", deocRef.id);

            return {...data, id: deocRef.id}
        } catch (e) {
            console.log(e);
        }

    }
)

export const updatemedicines = createAsyncThunk(
    'medisines/put',

    async (data) => {
        console.log(data);
        const washingtonRef = doc(db, "medicines", data.id);

        await updateDoc(washingtonRef, { ...data, id: data.id })

        return data;
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
    name: 'medisines',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(getmedicines.pending, onLoding)
        // builder.addCase(getmedicines.fulfilled,(state, action) => {
        //     console.log(action);
        //     state.medisines = action.payload;
        //     state.error = null;
        //     state.isLoding = false;
        // })
        // builder.addCase(getmedicines.rejected, onError)
        // builder.addCase(deletemedicines.fulfilled,(state, action) => {
        //     state.medisines = state.medisines.filter((v) => v.id !== action.payload)
        // })

        builder.addCase(getmedicines.pending, onLoding);

        builder.addCase(getmedicines.fulfilled, (state, action) => {
            console.log(action);
            state.medisines = action.payload;
            state.error = null;
            state.isLoding = false;
        })

        builder.addCase(deletemedicines.rejected, onError)

        builder.addCase(deletemedicines.fulfilled, (state, action) => {
            console.log(action);
            state.medisines = state.medisines.filter((v) => v.id !== action.payload)
        })

        builder.addCase(addmedicines.fulfilled, (state, action) => {
            console.log(action);
            state.medisines = state.medisines.concat(action.payload)
        })

        builder.addCase(updatemedicines.fulfilled, (state, action) => {
            console.log(action);

            state.medisines = state.medisines.map((v) => {
                if(v.id === action.payload.id) {
                    return action.payload;
                } else {
                    return v;
                }
            })
        })

    }
})

export default medisinSlice.reducer