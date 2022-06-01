import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { fetchBooks, fetchDeleteBook, fetchSearchBooks } from "../../redux/action-creators/books";

const Books: React.FC = () => {
  const { books, error, loading } = useTypesSelector(state => state.books);
  const [bookSearchText, setBookSearchText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
  }, []);

  const changeHandlerSearchAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookSearchText(e.target.value);

    if(e.target.value !== ''){
      dispatch(fetchSearchBooks(e.target.value));      
    }
    else {
      dispatch(fetchBooks());
    }
  }

  if(error){
    return <h1>{error}</h1>
  }
  
  return (
    <div className="container">
      <div className="col d-flex flex-column justify-content-center align-items-center">
        <Link to="/authors">Авторы</Link>
        <Link to="/books">Книги</Link>

        <div className="table-responsive mt-5">
          <div className="form-group">
            <input type="text" value={bookSearchText} onChange={changeHandlerSearchAuthor}
              className="form-control" placeholder="search books..." />
          </div>
          
          {renderBooksTable()}
        </div>
      </div>
    </div>
  )

  function renderBooksTable() {
    if(loading) {
      return <h1>Идет загрузка...</h1>
    }

    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Price</th>
              <th scope='col'>GRUD Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr>
                <td scope="row"> { book.title } </td>
                <td> { book.price } </td>
                <td>
                  <Link className="btn btn-dark btn-lg" role="button" to={`/update-book/${book.id}`}>
                    Update
                  </Link>
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