import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoctorForm from './DoctorForm';


export default function Doctor() {


    const [mData, setMData] = useState([])
    const [update, setUpdate] = useState(false)


    React.useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("doctor"));
        if (localData) {
            setMData(localData);
        }
    }, [])

    const handleFormSubmit = (data) => {
        // console.log(data);
        // console.log('erererere');
        let localData = JSON.parse(localStorage.getItem("doctor"));
        let id = Math.floor(Math.random() * 1000)
        if (localData) {
            if (update) {
                let localData = JSON.parse(localStorage.getItem("doctor"));

                let index = localData.findIndex((v) => v.id == data.id)
                console.log(index);

                localData[index] = data;

                localStorage.setItem("doctor", JSON.stringify(localData))
                setMData(localData)

                setUpdate(false)
            } else {
                localData.push({ id: id, ...data });
                localStorage.setItem("doctor", JSON.stringify(localData))
                setMData(localData)
                // console.log(localData);
            }

        } else {
            localStorage.setItem("doctor", JSON.stringify([{ id, ...data }]))
            setMData([{ id, ...data }])
        }
    }




    const handleEdit = (data) => {
        // console.log(data);
        // handleClickOpen();
        // setValues(data);
        // setMData(data)
        setUpdate(data)
    }

    const handleDelete = (id) => {
        // console.log(id);
        let localData = JSON.parse(localStorage.getItem("doctor"));

        let Ddata = localData.filter((v) => v.id !== id)

        localStorage.setItem("doctor", JSON.stringify(Ddata))
        setMData(Ddata)

    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'desc', headerName: 'Desc', width: 130 },
        { field: 'designation', headerName: 'Designation', width: 130 },
        { field: 'url', headerName: 'Url', width: 130 },
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
            <DoctorForm onhandleSubmit={handleFormSubmit} onupdate={update} />
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
