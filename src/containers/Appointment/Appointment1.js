// import React, { useState } from 'react';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';

// const categoryOptions = ['Electronics', 'Clothing', 'Books'];

// const vailedationSchema = Yup.object().shape({
//     productName: Yup.string().required("please enter product name"),
//     category: Yup.string().required("please select category"),
//     price: Yup.number().required("please enter price").positive(),
//     discount: Yup.number().positive()
// })

// function Appointment1(props) {
//     const [step, setStep] = useState(1)

//     const initialValues = {
//         productName:'',
//         category:'',
//         price:'',
//         discount:''
//     }

//     return (
//         <div>
//             <div>
//                 <h1>My Form</h1>
//                 <Formik
//                     initialValues={initialValues}
//                     vailedationSchema={vailedationSchema}
//                     onSubmit={(values, actions) => {
//                         setTimeout(() => {
//                             // alert(JSON.stringify(values, null, 2));
//                             actions.setSubmitting(false);
//                         }, 1000);
//                     }}
//                 >
//                     {({ isSubmit, values }) => (

//                         <Form >
//                             <div>
//                                 {step > 1 && (
//                                     <div>
//                                         <label htmlFor='productName'>productName</label>
//                                         <Field type='text' name='productName' />
//                                         <ErrorMessage name='productName' component='div' />

//                                         <label htmlFor='category'>Category</label>
//                                         <Field as='select' name='category'>
//                                             <option value="" label='select category' />
//                                             {categoryOptions.map((value) => {
//                                                 <option>{value}</option>
//                                             })}

//                                         </Field>
//                                     </div>
//                                 )}








//                                 <div>
//                                     {step > 1 && (
//                                         <button onClick={handlepreStep}>Previous</button>
//                                     )

//                                     }

//                                     {step < 3 && (
//                                         <button
//                                             onClick={handlenextStep}
//                                             disabled={(
//                                                 step === 1 &&(
//                                                     (!values.productName || !values.category) 
//                                                 )

//                                                 )}
//                                         >Next</button>
//                                     )

//                                     }

//                                     {step === 3 && (
//                                         <button onClick={handlesubmitStep}>Submit</button>
//                                     )

//                                     }
//                                 </div>
//                             </div>
//                         </Form>

//                     )}

//                 </Formik>
//             </div>


//         </div>
//     );
// }

// export default Appointment1;

import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { addAPTdata, deletAPTdata, getAPTdata, updateAPTdata } from '../../slice/appointment.slice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Height } from '@mui/icons-material';



function Appointment1({ }) {

    const [update, setUpdate] = useState(false)

    const apt = useSelector(state => state.apt)
    console.log(apt);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAPTdata())
    }, [])

    const [value, setValue] = React.useState(0);

    const handleChange1 = (event, newValue) => {
        setValue(newValue);
    };



    const aptdata = useSelector(state => state.apt)

    let d = new Date()
    let nd = new Date()
    nd.setDate(d.getDate() - 1)
    // console.log(nd);


    let Appointmentschema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z]{2,30}$/, "Please Enter Valid Name"),
        email: yup.string()
            .email("Please Enter Valid Email")
            .required("Please Enter Email"),
        phone: yup.string()
            .required("Please Enter Phone Number")
            .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Please Enter Valid Phone Number")
            .typeError("Only Digit Number Allowed"),
        date: yup.date()
            .min(nd, "Please Select Valid Date")
            .required("Please Select Date"),
        department: yup.string()
            .required("Please Select Any One Option"),
        message: yup.string()
            .required("Please Enter Message"),
    })

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
            file: ''
        },

        onSubmit: (values, action) => {
            console.log(values);


            action.resetForm()

            if(update){
                dispatch(updateAPTdata(values))
            } else {
                dispatch(addAPTdata(values));
            }
           
           
            setValue("2")
        },

        validationSchema: Appointmentschema
    })

    const handleDelet = (data) => {
        console.log(data);
        dispatch(deletAPTdata(data)); 
        // { file_name: Appointment1.file, document_id_to_delete: Appointment1.id }
    }

    const handleEdite = (data) => {
        setValue("1")
        setValues(data)
        setUpdate(true)
    }

    const { handleSubmit, handleChange, handleBlur, setFieldValue, values, errors, touched, setValues } = formikObj

    return (
        <div>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                        </div>


                        <Tabs value={value} onChange={handleChange1} aria-label="basic tabs example">
                            <Tab label="Book Appointment" value="1" />
                            <Tab label="Liist Appointment" value="2" />
                        </Tabs>

                        {
                            value === "1" ? <form role="form" className="php-email-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        {errors.name && touched.name ? <span>{errors.name}</span> : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email ? <span>{errors.email}</span> : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            placeholder="Your Phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                        />
                                        {errors.phone && touched.phone ? <span>{errors.phone}</span> : ''}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="date"
                                            name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="Appointment Date"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                        />
                                        {errors.date && touched.date ? <span>{errors.date}</span> : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select
                                            name="department"
                                            id="department"
                                            className="form-select"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.department}
                                        >
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        {errors.department && touched.department ? <span>{errors.department}</span> : ''}
                                    </div>

                                    <div className="col-md-4 form-group mt-3">

                                        <input
                                            type="file"
                                            name="file"
                                            onChange={(event) => setFieldValue("file", event.target.files[0])}

                                        />
                                        <img
                                            src={typeof  values.file  === 'string' ? values.file : URL.createObjectURL(values.file)}
                                            width={"50px"}
                                            height={"50px"}
                                        />
                                        {errors.file && touched.file ? <span>{errors.file}</span> : ''}
                                        {/* {errors.file && touched.file ? <span>{errors.file}</span> : null} */}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        placeholder="Message "
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                    />
                                    {errors.message && touched.message ? <span>{errors.message}</span> : ''}
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            </form> :
                                <div className='row'>
                                    {
                                        Array.isArray(apt.apt) && apt.apt.map((v) => {
                                            return (
                                                <div className='col-md-3'>
                                                    <p>{v.name}</p>
                                                    {/* <p>{v.message}</p> */}
                                                    <img src={v.file} width={'100px'} height={'100px'}></img>
                                                    <p>{v.url}</p>
                                                    <button onClick={() => handleDelet(v)}>X</button>
                                                    <button onClick={() => handleEdite(v)}>E</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                        }
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Appointment1;