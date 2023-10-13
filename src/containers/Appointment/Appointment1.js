import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const categoryOptions = ['Electronics', 'Clothing', 'Books'];

const vailedationSchema = Yup.object().shape({
    productName: Yup.string().required("please enter product name"),
    category: Yup.string().required("please select category"),
    price: Yup.number().required("please enter price").positive(),
    discount: Yup.number().positive()
})

function Appointment1(props) {
    const [step, setStep] = useState(1)

    const initialValues = {
        productName:'',
        category:'',
        price:'',
        discount:''
    }

    return (
        <div>
            <div>
                <h1>My Form</h1>
                <Formik
                    initialValues={initialValues}
                    vailedationSchema={vailedationSchema}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {({ isSubmit, values }) => (

                        <Form >
                            <div>
                                {step > 1 && (
                                    <div>
                                        <label htmlFor='productName'>productName</label>
                                        <Field type='text' name='productName' />
                                        <ErrorMessage name='productName' component='div' />

                                        <label htmlFor='category'>Category</label>
                                        <Field as='select' name='category'>
                                            <option value="" label='select category' />
                                            {categoryOptions.map((value) => {
                                                <option>{value}</option>
                                            })}

                                        </Field>
                                    </div>
                                )}








                                <div>
                                    {step > 1 && (
                                        <button onClick={handlepreStep}>Previous</button>
                                    )

                                    }

                                    {step < 3 && (
                                        <button
                                            onClick={handlenextStep}
                                            disabled={(
                                                step === 1 &&(
                                                    (!values.productName || !values.category) 
                                                )
                                                   
                                                )}
                                        >Next</button>
                                    )

                                    }

                                    {step === 3 && (
                                        <button onClick={handlesubmitStep}>Submit</button>
                                    )

                                    }
                                </div>
                            </div>
                        </Form>

                    )}

                </Formik>
            </div>


        </div>
    );
}

export default Appointment1;