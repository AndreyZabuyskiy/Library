import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup';
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchUpdateBook, loadBook } from "../../../redux/action-creators/updateBook";

const UpdateBookForm: React.FC = () => {
  const { book, loading, error, isUpdateBook, bookUpdated, authors } = useTypesSelector(state =>
    state.updateBook);
  
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBook(id))
  }, [id]);

  const validationSchema = yup.object().shape({
    title: yup.string().required('Обязательно'),
    description: yup.string(),
    price: yup.number(),
    numberOfPage: yup.number(),
    yearOfPublication: yup.number(),
    authorId: yup.string().required('Обязательно')
  });

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

          dispatch(fetchUpdateBook(book.id, {
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

export default UpdateBookForm;