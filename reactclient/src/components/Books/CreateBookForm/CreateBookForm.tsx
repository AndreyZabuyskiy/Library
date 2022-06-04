import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { Formik } from "formik";
import * as yup from 'yup';
import { fetchCreateBook, fetchLoadAuthors } from "../../../redux/action-creators/createBook";

const CreateBookForm: React.FC = () => {
  const { book, loading, error, authors } = useTypesSelector(state => state.createBook);
  const dispatch = useDispatch();
  
  const validationSchema = yup.object().shape({
    title: yup.string().required('Обязательно'),
    description: yup.string(),
    price: yup.number(),
    numberOfPage: yup.number(),
    yearOfPublication: yup.number(),
    authorId: yup.string().required('Обязательно')
  });

  useEffect(() => {
    dispatch(fetchLoadAuthors())
  }, []);

  return (
    <div className="container">
      <Formik 
        initialValues={{
          title: "",
          description: "",
          price: 0,
          numberOfPage: 0,
          yearOfPublication: 0,
          authorId: ""
        }}
        validateOnBlur
        onSubmit={(values) => {
          const title = values.title;
          const description = values.description;
          const price = values.price;
          const numberOfPage = values.numberOfPage;
          const yearOfPublication = values.yearOfPublication;
          const authorId = values.authorId;

          dispatch(fetchCreateBook({
            title,
            description,
            price,
            numberOfPage,
            yearOfPublication,
            authorId
          }));
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className="container">
            <div className="form-group">
              <input
              type={"text"}
              name={`title`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className="form-control"
              placeholder="title"
              />
              {touched.title && errors.title && <p className={"error"}>{errors.title}</p>}
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
              {touched.description && errors.description && <p className={"error"}>{errors.description}</p>}
            </div>
            <br />

            <div className="form-group">
              <input
              type={"number"}
              name={`price`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              className="form-control"
              placeholder="price"
              />
              {touched.price && errors.price && <p className={"error"}>{errors.price}</p>}
            </div>
            <br />

            <div className="form-group">
              <input
              type={"number"}
              name={`numberOfPage`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numberOfPage}
              className="form-control"
              placeholder="number of page"
              />
              {touched.numberOfPage && errors.numberOfPage && <p className={"error"}>{errors.numberOfPage}</p>}
            </div>
            <br />

            <div className="form-group">
              <input
              type={"number"}
              name={`yearOfPublication`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.yearOfPublication}
              className="form-control"
              placeholder="year of publication"
              />
              {touched.yearOfPublication && errors.yearOfPublication && <p className={"error"}>
              {errors.yearOfPublication}</p>}
            </div>
            <br />

            <div className="form-group">
              <input
              type={"text"}
              name={`authorId`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.authorId}
              className="form-control"
              placeholder="author id"
              />
              {touched.authorId && errors.authorId && <p className={"error"}>{errors.authorId}</p>}
            </div>
            <br />

            <div>
            {authors?.map(author => (
              <p>{author.id}: {author.firstName} {author.lastName}</p>
            ))}
            </div>
            <br />

            <div className="form-group">
              <button
              type="submit"
              className="btn btn-success form-control"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}> Create </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default CreateBookForm;