import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { fetchAuthors } from "../../redux/action-creators/authors";

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

  const authorElements = authors.map(author => 
    <div>
      <p> {author.id} </p>
      <p> {author.firstName} </p>
      <p> {author.lastName} </p>
      <hr />
    </div>
  );

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
            {authors.map(author => (
              <tr>
              <th scope="row"> { author.id } </th>
              <td> { author.firstName } </td>
              <td> { author.lastName } </td>
              <td>
                <button className="btn btn-dark btn-lg mx-3 my-3">Update</button>
                <button className="btn btn-secondary btn-lg">Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Authors;