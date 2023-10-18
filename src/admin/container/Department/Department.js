import React from 'react';
// import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DepartmentForm from './DepartmentForm';
import { getdepartment } from '../../../reducx/action/department.action';
import { useDispatch, useSelector } from 'react-redux';


function Department(props) {
    const [mData, setMData] = useState([])
    const [update, setUpdate] = useState(false)

    const departmrnt = useSelector(state => state.department)
    console.log(departmrnt);

    const dispatch = useDispatch()
    useEffect(() => {
        // let localData = JSON.parse(localStorage.getItem("department"));
        // if (localData) {
        //     setMData(localData);
        // }
        dispatch(getdepartment())
    }, [])

    const handleFormSubmitDep = (data) => {
        // console.log(data);
        console.log('erererere');
        let localData = JSON.parse(localStorage.getItem("department"));
        let id = Math.floor(Math.random() * 1000)
        if (localData) {
            if (update) {
                let localData = JSON.parse(localStorage.getItem("department"));

                let index = localData.findIndex((v) => v.id == data.id)
                console.log(index);

                localData[index] = data;

                localStorage.setItem("department", JSON.stringify(localData))
                setMData(localData)

                setUpdate(false)
            } else {
                localData.push({ id: id, ...data });
                localStorage.setItem("department", JSON.stringify(localData))
                setMData(localData)
                console.log(localData);
            }

        } else {
            localStorage.setItem("department", JSON.stringify([{ id, ...data }]))
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
        let localData = JSON.parse(localStorage.getItem("department"));

        let Ddata = localData.filter((v) => v.id !== id)

        localStorage.setItem("department", JSON.stringify(Ddata))
        setMData(Ddata)

    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'sub title', headerName: 'Sub Title', width: 130 },
        { field: 'main title', headerName: 'Main Title', width: 130 },
       
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
            <DepartmentForm onhandleDepSubmit={handleFormSubmitDep} onupdate={update} />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={departmrnt.department}
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

export default Department;