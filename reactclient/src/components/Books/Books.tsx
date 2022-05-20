import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { fetchBooks } from "../../redux/action-creators/books";

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

  const bookElements = books.map(book => 
    <div>
      <p>{book.id}</p>
      <p>{book.title}</p>
      <p>{book.price}</p>
      <hr />
    </div>
  );

  return <div> { bookElements } </div>
}

export default Books;