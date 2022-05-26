import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchBookView } from "../../../redux/action-creators/bookView";

export const ViewBook: React.FC = () => {
  const {book, loading, error} = useTypesSelector(state => state.bookView);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchBookView(id));
  }, [id]);

  const styleAuthorName =
  {
    backgroundColor: 'blue'
  };

  const styleAuthorNameText = {
    backgroundColor: "yellow"
  };

  return (
    <div>
      {
        book && (
          <div className="container">
            <div className='row'>
              <div className="col-md-12">
                <h1>{ book.author.firstName } { book.author.lastName} - { book.title }</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2>Description</h2>
                <p>{ book.description }</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2>Settings:</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <span>Author</span>
              </div>
              <div className="col-xs-6 col-sm-9 col-md-9 col-lg-9">
                <span>{ book.author.firstName } { book.author.lastName}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <span>Price</span>
              </div>
              <div className="col-xs-6 col-sm-9 col-md-9 col-lg-9">
                <span>{ book.price }</span>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <span>Pages</span>
              </div>
              <div className="col-xs-6 col-sm-9 col-md-9 col-lg-9">
                <span>{ book.numberOfPages }</span>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <span>Year</span>
              </div>
              <div className="col-xs-6 col-sm-9 col-md-9 col-lg-9">
                <span>{ book.yearOfPublication }</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ViewBook;