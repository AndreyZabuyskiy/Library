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

  /*const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [numberOfPage, setNumberOfPage] = useState<number>();
  const [yearOfPublication, setYearOfPublication] = useState<number>();
  const [authorId, setAuthorId] = useState<string>('');

  const changeHandlerTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const changeHandlerDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  const changeHandlerPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  }

  const changeHandlerPages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPage(Number(e.target.value));
  }

  const changeHandlerYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearOfPublication(Number(e.target.value));
  }

  const changeHandlerAuthorId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorId(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent) => {
    dispatch(fetchCreateBook({
      authorId,
      title,
      description,
      price,
      numberOfPage,
      yearOfPublication
    }));
  }*/

  /*return (
    <div className="container">
      <h1 className="col d-flex flex-column justify-content-center align-items-center">Add book</h1>
      <div className="form-group">
            <input type="text" value={title} onChange={changeHandlerTitle} className="form-control" placeholder="title" />
          </div>
          <br />
          <div className="form-group">
            <input type="text" value={description} onChange={changeHandlerDescription} className="form-control" placeholder="description" />
          </div>
          <br />
          <div className="form-group">
            <input type="number" value={price} onChange={changeHandlerPrice} className="form-control" placeholder="price" />
          </div>
          <br />
          <div className="form-group">
            <input type="number" value={numberOfPage} onChange={changeHandlerPages} className="form-control" placeholder="pages" />
          </div>
          <br />
          <div className="form-group">
            <input type="number" value={yearOfPublication} onChange={changeHandlerYear} className="form-control" placeholder="year of publication" />
          </div>
          <br />
          <div className="form-group">
            <input type="text" value={authorId} onChange={changeHandlerAuthorId} className="form-control" placeholder="author id" />
          </div>
          <br />
          <div className="form-group">
            <button type="button" onClick={clickHandler} className="btn btn-success form-control">
              Create
            </button>
          </div>
    </div>
  );*/
}

export default CreateBookForm;