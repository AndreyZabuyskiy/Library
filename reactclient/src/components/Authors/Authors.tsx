import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { fetchAuthors, fetchDeleteAuthors, fetchSearchAuthors } from "../../redux/action-creators/authors";

const Authors: React.FC = () => {
  const {authors, error, loading} = useTypesSelector(state => state.authors);
  const [searchAuthor, setSearchAuthor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthors())
  }, []);

  const changeHandlerSearchAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAuthor(e.target.value);
    
    if(e.target.value !== '') {
      dispatch(fetchSearchAuthors(e.target.value));
    }
    else {
      dispatch(fetchAuthors());
    }
  }
  
  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="container">
      <div className="col d-flex flex-column justify-content-center align-items-center">
        <Link to="/authors">Авторы</Link>
        <Link to="/books">Книги</Link>

        <div className="table-responsive mt-5">
          <div className="form-group">
            <input type="text" value={searchAuthor} onChange={changeHandlerSearchAuthor}
              className="form-control" placeholder="search authors..." />
          </div>

          <br />
        
          { renderAuthorList() }
        </div>
      </div>
    </div>
  );

  function renderAuthorList() {
    if(loading){
      return <h1>Идет загрузка...</h1>
    }
    return (
      <table className="table table-bordered border-dark">
        <thead>
          <tr>
            <th scope='col'>FirstName</th>
            <th scope='col'>LastName</th>
            <th scope='col'>Number of books</th>
            <th scope='col'>GRUD Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            authors.map(author => (
              <tr>
                <td scope="row"> { author.firstName } </td>
                <td> { author.lastName } </td>
                <td> { author.numberOfBooks } </td>
                <td>
                  <Link className="btn btn-dark btn-lg" role="button" to={`/update-author/${author.id}`}>
                    Update
                  </Link>
                  <button onClick={(id: any) => dispatch(fetchDeleteAuthors(author.id))} className="btn btn-secondary btn-lg mx-3 my-3">
                    Delete
                  </button>
                  <Link className="btn btn-info btn-lg" role="button" to={`/authors/${author.id}`}>
                    View
                  </Link>
                </td>
              </tr>
            ))
          }
      </tbody>
    </table>
  )}
}

export default Authors;