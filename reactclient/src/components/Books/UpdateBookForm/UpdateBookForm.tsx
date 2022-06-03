import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchUpdateBook, loadBook } from "../../../redux/action-creators/updateBook";

const UpdateBookForm: React.FC = () => {
  const { book, loading, error, isUpdateBook, bookUpdated, authors } = useTypesSelector(state =>
    state.updateBook);
  
  const {id} = useParams();
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [numberOfPage, setNumberOfPage] = useState<number>();
  const [yearOfPublication, setYearOfPublication] = useState<number>();
  const [authorId, setAuthorId] = useState<any>();

  useEffect(() => {
    dispatch(loadBook(id))
  }, [id]);

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

  const clickHandlerUpdate = (e: React.MouseEvent) => {
    dispatch(fetchUpdateBook(book.id, {
      title,
      description,
      price,
      numberOfPage,
      yearOfPublication,
      authorId
    }));
  }

  if(loading){
    <h1>Идет загрузка...</h1>
  }

  if(error){
    <h1>Ошибка...</h1>
  }

  return (
    <div>
      {book && (
        <div className="container">
          <h1>{ book.title }</h1>
          <div className="form-group">
            <input type="text" value={title} onChange={changeHandlerTitle} className="form-control" placeholder="title" />
          </div>
          <br />
          <div className="form-group">
            <input type="text" value={description} onChange={changeHandlerDescription}
            className="form-control" placeholder="description" />
          </div>
          <br />
          <div className="form-group">
            <input type="number" value={price} onChange={changeHandlerPrice}
            className="form-control" placeholder="price" />
          </div>
          <br />
          <div className="form-group">
            <input type="number" value={numberOfPage} onChange={changeHandlerPages}
            className="form-control" placeholder="pages" />
          </div>
          <br />
          <div className="form-group">
            <input type="number" value={yearOfPublication} onChange={changeHandlerYear}
            className="form-control" placeholder="year of publication" />
          </div>
          <br />
          <div>
            <table className="table table-bordered border-dark">
              <thead>
                <tr>
                  <th scope='col'>FirstName</th>
                  <th scope='col'>LastName</th>
                  <th scope='col'>Operation</th>
                </tr>
              </thead>
              <tbody>
              {authors?.map(author => (
                <tr>
                  <td scope="row"> { author.firstName } </td>
                  <td> { author.lastName } </td>
                  <td>
                    <div className="form-group">
                      <button type="button" onClick={() => setAuthorId(author.id)}
                      className="btn btn-success form-control">
                        Select
                      </button>
                    </div>
                  </td>
                </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          <br />
          <div className="form-group">
            <button type="button" onClick={clickHandlerUpdate} className="btn btn-success form-control">Update</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateBookForm;