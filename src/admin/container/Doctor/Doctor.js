import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Doctor() {
    const [open, setOpen] = React.useState(false);

    const [mData, setMData] = useState([])
    const [update, setUpdate] = useState(false)


    React.useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("doctor"));
        if (localData) {
            setMData(localData);
        }
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    let doctorSchema = yup.object().shape({
        name: yup.string().required("please enter name").matches(/^([a-zA-Z ]){2,30}$/, "plase enter valid name"),
        desc: yup.string().required("please enter desc").test("desc", "max 20 allow", (values) => {
            if (values.length <= 20) {
                return true
            } else {
                return false
            }
        }),
        designation: yup.string().required("please enter designation").matches(/^([a-zA-Z ]){2,30}$/, "plase enter valid designation"),
        url: yup.string().required("please enter name"),



    })

    const handleUpdate = (data) => {

       
        let localData = JSON.parse(localStorage.getItem("doctor"));

        let index = localData.findIndex((v) => v.id == data.id)
        console.log(index);

        localData[index] = data;

        localStorage.setItem("doctor", JSON.stringify(localData))
        setMData(localData)

        setUpdate(false)

    }

    const Doctordata = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("doctor"));
        let id = Math.floor(Math.random() * 1000)
        if (localData) {
            localData.push({ id: id, ...data });
            localStorage.setItem("doctor", JSON.stringify(localData))
            setMData(localData)
            // console.log(localData);
        } else {
            localStorage.setItem("doctor", JSON.stringify([{ id, ...data }]))
            setMData([{ id, ...data }])
        }
    }


    const formikobj = useFormik({

        initialValues: {
            name: '',
            desc: '',
            designation: '',
            url: ''

        },

        validationSchema: doctorSchema,
        onSubmit: (values, action) => {
            console.log(values);

            if (update) {
                handleUpdate(values)
            } else {
                handleUpdate(values)
            }
            Doctordata(values);
            action.resetForm();
            handleClose()
        },

    })

    const { handleSubmit, handleChange, handleBlur, errors, values, touched, setValues } = formikobj;
    console.log(values);

    const handleEdit = (data) => {
        // console.log(data);
        handleClickOpen();
        setValues(data);
        setMData(data)
        setUpdate(true)
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
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? <span>{errors.name}</span> : null}
                    <TextField
                        
                        margin="dense"
                        id="desc"
                        name="desc"
                        label="desc"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.desc}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.desc && touched.desc ? <span>{errors.desc}</span> : null}
                    <TextField
                        
                        margin="dense"
                        id="designation"
                        name="designation"
                        label="designation"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.designation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.designation && touched.designation ? <span>{errors.designation}</span> : null}

                    <TextField
                        
                        margin="dense"
                        id="url"
                        name="url"
                        label="url"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.url && touched.url ? <span>{errors.url}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
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
