import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup';import { fetchCreateAuthor } from "../../../redux/action-creators/createAuthor";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchUpdateAuthor, loadAuthor } from "../../../redux/action-creators/updateAuthor";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const UpdateAuthorForm: React.FC = () => {
  /*const { author, loading, error, isUpdateAuthor, authorUpdated } = useTypesSelector(state =>
    state.updateAuthor);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");*/
  const {id} = useParams();
  const dispatch = useDispatch();

  const validationsSchema = yup.object().shape({
    firstName: yup.string().required('Обязательно'),
    lastName: yup.string().required('Обязательно'),
    description: yup.string()
  });

  useEffect(() => {
    dispatch(loadAuthor(id))
  }, [id]);

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

          dispatch(fetchUpdateAuthor(id, {
            firstName,
            lastName,
            description,
            dateOfBirth
          }));
        }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
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

  /*const changeHandlerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const changeHandlerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent) => {
    dispatch(fetchUpdateAuthor(author.id, {
       firstName,
       lastName
     }));
   }

  return (
    <div>
      {author && (
        renderUpdateForm()
      )}
    </div>
  );

  function renderUpdateForm() {
    return (
      <div className="container">
        <h1>{ author.firstName } { author.lastName }</h1>

        <div className="form-group">
          <input type="text" value={firstName} onChange={changeHandlerFirstName} className="form-control" placeholder="first name" />
        </div>
    
        <br />
    
        <div className="form-group">
          <input type="text" value={lastName} onChange={changeHandlerLastName} className="form-control" placeholder="last name" />
        </div>
    
        <br />
          
        <div className="form-group">
          <button type="button" onClick={clickHandler} className="btn btn-success form-control">Update</button>
        </div>
      </div>
    );
  }*/
}

export default UpdateAuthorForm;