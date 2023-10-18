
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

function DepartmentForm({onhandleDepSubmit, onupdate}) {
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

    let departmentSchema = yup.object().shape({
        name: yup.string().required("please enter name").matches(/^([a-zA-Z ]){2,30}$/, "plase enter valid name"),
        sub_title: yup.string().required("please enter sub_title").test("sub_title", "max 20 allow", (values) => {
            if (values.length <= 20) {
                return true
            } else {
                return false
            }
        }),
        main_title: yup.string().required("please enter main_title").matches(/^([a-zA-Z ]){2,30}$/, "plase enter valid main_title"),
    })


    const formikobj = useFormik({

        initialValues: {
            name: '',
            sub_title: '',
            main_title: '',
           

        },

        validationSchema: departmentSchema,
        onSubmit: (values, action) => {
            console.log(values);
            // onhandleSubmit(values);
            onhandleDepSubmit(values)

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
                        id="sub_title"
                        name="sub_title"
                        label="sub_title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.sub_title}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.sub_title && touched.sub_title ? <span>{errors.sub_title}</span> : null}
                    <TextField
                        
                        margin="dense"
                        id="main_title"
                        name="main_title"
                        label="main_title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.main_title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.main_title && touched.main_title ? <span>{errors.main_title}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DepartmentForm;