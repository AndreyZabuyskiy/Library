import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchBookView } from "../../../redux/action-creators/bookView";

export const SingleBook: React.FC = () => {
  const {book, loading, error} = useTypesSelector(state => state.bookView);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchBookView(id));
  }, [id]);

  if(loading){
    return <h1>Загрузка ошибки...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }

  return (
    <div>
      {
      book && (
        <>
          <p>{ book.id }</p>
          <p>{ book.title }</p>
          <p>{ book.description }</p>
          <p>{ book.price }</p>
        </>
      )}
    </div>
  );
}

export default SingleBook;