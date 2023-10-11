import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';

function DoctorForm({onhandleSubmit, onupdate}) {
    const [open, setOpen] = React.useState(false);

    useEffect(()=> {
        if(onupdate){
            handleClickOpen()
            setValues(onupdate)
        }
       
    },[onupdate])

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


    const formikobj = useFormik({

        initialValues: {
            name: '',
            desc: '',
            designation: '',
            url: ''

        },

        validationSchema: doctorSchema,
        onSubmit: (values, action) => {
            onhandleSubmit(values);

            // if (update) {
            //     handleUpdate(values)
            // } else {
            //     Doctordata(values);
            // }
            // Doctordata(values);
            action.resetForm();
            handleClose()
        },

    })

    const { handleSubmit, handleChange, handleBlur, errors, values, touched, setValues } = formikobj;
    console.log(values);
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
        </div>
    );
}

export default DoctorForm;