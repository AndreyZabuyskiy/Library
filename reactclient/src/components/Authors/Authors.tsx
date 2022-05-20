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
      <p> { author.lastName} </p>
      <hr />
    </div>
  );

  return (
    <div>
      { authorElements }
    </div>
  );
}

export default Authors;