import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MedisinForm from './MedisinForm';


export default function Medisin() {


    const [mData, setMData] = useState([])
    const [updte, setUpdate] = useState(false)


    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medisin"));
        if (localData) {
            setMData(localData);
        }
    }, [])

    const handleFormSubmit = (data) => {
        let localData = JSON.parse(localStorage.getItem("medisin"));
        // console.log(localData);
        let id = Math.floor(Math.random() * 1000)
        if (localData) {
            if (updte) {
                let localData = JSON.parse(localStorage.getItem("medisin"));

                let index = localData.findIndex((v) => v.id == data.id)
                console.log(index);

                localData[index] = data;

                localStorage.setItem("medisin", JSON.stringify(localData))
                setMData(localData)

                setUpdate(false)
            } else {
                localData.push({ id: id, ...data });
                localStorage.setItem("medisin", JSON.stringify(localData))
                setMData(localData)
                // console.log(localData);
            }

        } else {
            localStorage.setItem("medisin", JSON.stringify([{ id, ...data }]))
            setMData([{ id, ...data }])
        }
    }

    const handleUpdate = (data) => {
        console.log(data);

    }


    const Tabledata = (data) => {
        console.log('rhfrfhrfr');
        console.log(data);

    }
    // Tabledata()

    const handleEdit = (data) => {
        // console.log(data);
        // handleClickOpen();
        // setValues(data)
        // setMData(data)
        setUpdate(data)
    }

    const handleDelete = (id) => {
        // console.log(id);
        let localData = JSON.parse(localStorage.getItem("medisin"));

        let fData = localData.filter((v) => v.id !== id)

        localStorage.setItem("medisin", JSON.stringify(fData))
        setMData(fData)

    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'date', headerName: 'date', width: 130 },
        {
            field: 'Action', headerName: 'Action',

            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )

        },

    ];


    return (
        <div>
            <MedisinForm onHandleSubmit={handleFormSubmit} onupdte={updte}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={mData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}
