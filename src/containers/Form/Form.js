import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

function ValidationForm(props) {
  let validSchema = yup.object().shape({
    name: yup
      .string()
      .required("Please enter name")
      .matches(/^([a-zA-Z ]){2,30}$/, "Please enter a valid name"),
    email: yup
      .string()
      .required("Please enter email").matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "Please enter a valid email"),
    phone: yup
      .string()
      .required("Please enter phone")
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter a valid phone"),
    country: yup.string().required("Please select a country"),
    gender: yup.string().required("please select gender").min("please required two checkbox")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      gender: "",
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("data", JSON.stringify(values));
    },
  });

  const { handleChange, handleBlur, handleSubmit, errors, values, touched } = formik;

  const handleInputChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;
    localStorage.setItem(name, value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="php-email-form">
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={values.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              value={values.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
        </div>
        <div className="form-group mt-3">
          <select
            as="select"
            name="country"
            value={values.country}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="form-control"
          >
            <option value="">Select a country</option>
            <option value="in">India</option>
            <option value="au">Australia</option>
            <option value="uk">UK</option>
          </select>
          {errors.country && touched.country ? (
            <span>{errors.country}</span>
          ) : null}
        </div>
        <div className="form-group mt-3">
          <p>Gender</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            Female
          </label>
        </div>
        {errors.gender && touched.gender ? <span>{errors.gender}</span> : null}

        {/* <div className="form-group mt-3">
          <p>Hobby</p>
          <input
            type="checkbox"
            name="hobby"
            checked={values.gender === "reading"}
            onChange={handleInputChange}
            onBlur={handleBlur}
          >
            reading
          </input>
          <input
            type="checkbox"
            name="hobby"
            checked={values.gender === "singing"}
            onChange={handleInputChange}
            onBlur={handleBlur}
          >
            singing
          </input>
        </div> */}

        <div className="text-center">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default ValidationForm;
