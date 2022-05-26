import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { fetchAuthors, fetchDeleteAuthors } from "../../redux/action-creators/authors";

const Authors: React.FC = () => {
  const {authors, error, loading} = useTypesSelector(state => state.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthors())
  }, []);

  if(loading) {
    return <h1>Идет загрузка...</h1>
  }
  
  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="container">
      <div className="col d-flex flex-column justify-content-center align-items-center">
        {renderAuthorsTable()}
      </div>
    </div>
  );

  function renderAuthorsTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope='col'>AuthorId (PK)</th>
              <th scope='col'>FirstName</th>
              <th scope='col'>LastName</th>
              <th scope='col'>GRUD Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              authors.map(author => (
                <tr>
                  <th scope="row"> { author.id } </th>
                  <td> { author.firstName } </td>
                  <td> { author.lastName } </td>
                  <td>
                    <button className="btn btn-dark btn-lg">Update</button>
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
      </div>
    );
  }
}

export default Authors;