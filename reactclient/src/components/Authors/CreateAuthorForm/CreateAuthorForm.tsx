import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchCreateAuthor } from "../../../redux/action-creators/createAuthor";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const CreateAuthorForm: React.FC = () => {
  const dispatch = useDispatch();

  const validationsSchema = yup.object().shape({
    firstName: yup.string().required('Обязательно'),
    lastName: yup.string().required('Обязательно'),
    description: yup.string()
  });

  return (
    <div className="container">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          description: "",
          dateOfBirth: new Date()
        }}
        validateOnBlur
        onSubmit={(values) => {
          const firstName = values.firstName;
          const lastName = values.lastName;
          const description = values.description;
          const dateOfBirth = {
              year: values.dateOfBirth?.getFullYear(),
              month: values.dateOfBirth?.getMonth() + 1,
              day: values.dateOfBirth?.getDate()
          }

          dispatch(fetchCreateAuthor({
            firstName,
            lastName,
            description,
            dateOfBirth
          }));
        }}
        validationSchema={validationsSchema}
      >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className="container">
            <div className="form-group">
              <input
              type={"text"}
              name={`firstName`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              className="form-control"
              placeholder="first name"
              />
              {touched.firstName && errors.firstName && <p className={"error"}>{errors.firstName}</p>}
            </div>
            <br />
            <div className="form-group">
              <input
              type={"text"}
              name={`lastName`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              className="form-control"
              placeholder="last name"
              />
              {touched.lastName && errors.lastName && <p className={"error"}>{errors.lastName}</p>}
            </div>
            <br />

            <div className="form-group">
              <input
                type={"text"}
                name={`description`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className="form-control"
                placeholder="description"
              />
            </div>
            <br />
            
            <div className="form-group">
              <DatePicker
              className="form-control"
              selected={values.dateOfBirth}
              onChange={handleBlur}
              dateFormat="MM/dd/yyyy" />
            </div>
            <br />

            <div className="form-group">
              <button
              type="submit"
              className="btn btn-success form-control"
              placeholder="date of birth"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}> Create </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default CreateAuthorForm;