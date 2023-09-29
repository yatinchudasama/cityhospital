import React from 'react';
import * as yup from 'yup'
import { useFormik } from 'formik';

function Appointment(props) {

    let d= new Date();
    // console.log(d);
    let nd = new Date()
    nd.setDate(d.getDate()-1);
    // console.log(nd);

    let appointmentSchema = yup.object().shape({
        name: yup.string().required("please enter name").matches(/^([a-zA-Z ]){2,30}$/, "plase enter valid name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phone: yup.string().required("please enter number").matches(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/, "please eanter valid number"),
        date: yup.date().required("please enter date").min(nd, 'please enter valid sate'),
        department: yup.string().required("please enter department"),
        message: yup
        .string()
        .required("please enter message")
        .matches(/[.*+?^${}()|[\]\\]/g, "plase enter valid message")
        .test("message", "max 5 word allow", function(arr) {
            if(arr.length <=5){
                return true;
            } else{
                return false;
            }
        })
        ,
        file: yup.string().required("please enter file")

    })

    const formikobj = useFormik({

        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
            file: ''
        },

        validationSchema: appointmentSchema,
        onSubmit: values => {
            
            let arr = values.message.split(" ")
            console.log(arr);

            // let res = arr.map((v) => {
            //     arr.toUpperCase().
            // })

        },

    })
    const { handleSubmit, handleChange, handleBlur, errors, values, touched } = formikobj;
    // console.log(errors);
    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <form onSubmit={handleSubmit} role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    values={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? <span>{errors.name}</span> : null}
                               

                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"

                                    values={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? <span>{errors.email}</span> : null}

                               
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"

                                    values={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
                               
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"

                                    values={values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.date && touched.date ? <span>{errors.date}</span> : null}
                               
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="department" id="department" className="form-select"
                                    values={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                    <option value=''>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>

                                </select>
                                {errors.department && touched.department ? <span>{errors.department}</span> : null}
                               
                            </div>

                            <div className="col-md-4 form-group mt-3">
                                <input type='file' 
                                name='file'
                                
                                values={values.file}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                 {errors.file && touched.file ? <span>{errors.file}</span> : null}
                              
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message (Optional)"
                                defaultValue={""}

                                values={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.message && touched.message ? <span>{errors.message}</span> : null}
                           
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </form>
                </div>
            </section>
        </main>

    );
}

export default Appointment;