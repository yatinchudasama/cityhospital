import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteObject, getDownloadURL, getMetadata, getStorage, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";
import { Collections, DoorBack } from "@mui/icons-material";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"


// import { db } from "../json-server/db.json"
// import { db } from './firebaseConfig';

const initialState = {
    isLoding: false,
    apt: [],
    error: null
}

export const addAPTdata = createAsyncThunk(

    'appointment/add',

    async (data) => {
        console.log(data);
        const rno = Math.floor(Math.random() * 100000);
        const storageRef = ref(storage, 'appointment/' + rno + "_" + data.file.name);
        let aptdata = { ...data };
        console.log(aptdata);

        // 'file' comes from the Blob or File API

        await uploadBytes(storageRef, data.file).then(async (snapshot) => {
            console.log('Uploaded a blob or file!');
            await getDownloadURL(snapshot.ref)
                .then(async (url) => {
                    console.log(url);
                    try {
                        const docRef = await addDoc(collection(db, "users"), {
                            first: "Ada",
                            last: "Lovelace",
                            born: 1815
                        });
                        console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }

                    let aptdoc = await addDoc(collection(db, "appointment"), { ...data, file: url, file_name: rno + '_' + data.file.name });
                    console.log('aaaaaaaaaaaaaaaaa', aptdoc.id);

                    aptdata = { id: aptdoc.id, ...data, file: url, file_name: rno + '_' + data.file.name }
                })
            console.log(aptdata);
        })
            .catch((error) => console.log(error))



        return aptdata;
    }
)

export const getAPTdata = createAsyncThunk(
    'appointment/get',

    async () => {

        let getdata = [];

        const querySnapshot = await getDocs(collection(db, "appointment"));
        querySnapshot.forEach((doc) => {
            getdata.push({ ...doc.data(), id: doc.id })
        })
        return getdata;
    }

)

export const deletAPTdata = createAsyncThunk(
    'appointment/delet',

    // async (data) => {
    //     try {
    //         // Create a reference to the file to delete in Cloud Storage
    //         const desertRef = ref(storage, 'appointment/' + data.file_name);

    //         // Check if the file exists before attempting deletion
    //         const fileSnapshot = await getMetadata(desertRef);

    //         if (fileSnapshot.exists) {
    //             // Delete the file from Cloud Storage
    //             await deleteObject(desertRef);

    //             // Delete the corresponding document from Firestore
    //             await deleteDoc(doc(db, "appointment", data.id));


    //         } else {
    //             return { success: false, error: "File does not exist" };
    //         }
    //     } catch (error) {
    //         console.error("Error deleting file or document:", error);
    //         return { success: false, error: error.message }; // Return error details
    //     }
    //     return data.id;
    // }

    async (data) => {

        // Create a reference to the file to delete
        const desertRef = ref(storage, 'appointment/' + data.file_name);

        // Delete the file
        await deleteObject(desertRef).then(async (data) => {
            await deleteDoc(doc(db, "appointment", data.id));

        }).catch((error) => {
            console.log(error);
        });



        return data.id;

    }
)

export const updateAPTdata = createAsyncThunk(
    'appointment/update',

    async (data) => {
        console.log(data);

        let aptdata = { ...data };
        console.log(aptdata);

        const washingtonRef = doc(db, "appointment", data.id)
        if (typeof data.file === 'string') {
            console.log('image not update');
            await updateDoc(washingtonRef, { ...data, id: data.id })
        } else {
            console.log('image update');

            const desertRef = ref(storage, 'appointment/' + data.file_name);

            // Delete the file
            await deleteObject(desertRef).then(async (data) => {
                await deleteDoc(doc(db, "appointment", data.id));

            }).catch((error) => {
                console.log(error);
            });

            const rno = Math.floor(Math.random() * 100000);
            const storageRef = ref(storage, 'appointment/' + rno + "_" + data.file.name);


            // 'file' comes from the Blob or File API

            await uploadBytes(storageRef, data.file).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        try {
                            const docRef = await addDoc(collection(db, "users"), {
                                first: "Ada",
                                last: "Lovelace",
                                born: 1815
                            });
                            console.log("Document written with ID: ", docRef.id);
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }

                        await updateDoc(washingtonRef, { ...data, file: url, file_name: rno + '_' + data.file.name })



                        aptdata = { ...data, file: url, file_name: rno + '_' + data.file.name }
                    })
                console.log(aptdata);
            })
                .catch((error) => console.log(error))

        }

        return aptdata;
    }

)
export const aptSlice = createSlice({
    name: 'appointment',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addAPTdata.fulfilled, (state, action) => {

            console.log(action.payload);
            state.isLoding = false;
            state.apt = state.apt.concat(action.payload);
            state.error = null;
        })

        builder.addCase(getAPTdata.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoding = false;
            state.apt = state.apt.concat(action.payload);
            state.error = null;
        })

        builder.addCase(deletAPTdata.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoding = false;
            state.apt = action.payload;
            state.error = null;
        })

        builder.addCase(updateAPTdata.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoding = false;
            state.apt = state.apt.map((v) => {
                console.log(v);
                if (v.id === action.payload.id) {
                    return action.payload
                } else {
                    return v;
                }
            })
            state.error = null;
        })
    }
})
export default aptSlice.reducer
