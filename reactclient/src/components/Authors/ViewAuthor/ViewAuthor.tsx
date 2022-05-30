import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchAuthorView } from "../../../redux/action-creators/authorView";
import { Link } from "react-router-dom";

const ViewAuthor: React.FC = () => {
  const {author, loading, error} = useTypesSelector(state => state.authorView);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchAuthorView(id))
  }, [id]);

  if(loading){
    return <h1>Идет загрузка...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }
  
  return (
    <div>
      {author && (
        <div className="container">
          <div className="row">
            <h1 className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              { author.firstName } { author.lastName }
            </h1>
          </div>

          <div className="row">
            <p className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              { author.description }
            </p>
          </div>

          <div className="row">
            <p className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              Date of birth: {author.dateOfBirth.day}/{author.dateOfBirth.month}/{author.dateOfBirth.year}
            </p>
          </div>

          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h2>Books:</h2>
              {author.books.map(book => (
                <p>
                  <Link className="btn btn-link" role="button" to={`/books/${book.id}`}>
                    {book.title}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewAuthor;