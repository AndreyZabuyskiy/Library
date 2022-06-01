import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchCreateBook } from "../../../redux/action-creators/createBook";

const CreateBookForm: React.FC = () => {
  const { book, loading, error } = useTypesSelector(state => state.createBook);
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
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
  }

  return (
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
  );
}

export default CreateBookForm;