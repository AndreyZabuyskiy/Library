import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { fetchBooks, fetchDeleteBook } from "../../redux/action-creators/books";

const Books: React.FC = () => {
  const { books, error, loading } = useTypesSelector(state => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
  }, []);

  if(loading) {
    return <h1>Идет загрузка...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }

  type ButtonProps = {
    handleClick: () => void
  }

  return (
    <div className="container">
      <div className="col d-flex flex-column justify-content-center align-items-center">
        {renderBooksTable()}
      </div>
    </div>
  )

  function renderBooksTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope='col'>BookId (PK)</th>
              <th scope='col'>Title</th>
              <th scope='col'>Price</th>
              <th scope='col'>GRUD Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr>
                <th scope="row"> { book.id } </th>
                <td> { book.title } </td>
                <td> { book.price } </td>
                <td>
                  <button className="btn btn-dark btn-lg">
                    <Link to={`/books/${book.id}`}>Update</Link>
                  </button>
                  <button onClick={(id: any) => dispatch(fetchDeleteBook(book.id))} 
                    className="btn btn-secondary btn-lg mx-3 my-3">Delete</button>
                  <Link className="btn btn-info btn-lg" role="button" to={`/books/${book.id}`}>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Books;