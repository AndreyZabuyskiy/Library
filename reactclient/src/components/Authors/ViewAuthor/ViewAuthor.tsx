import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchAuthorView } from "../../../redux/action-creators/authorView";

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
        <>
          <p>{ author.id }</p>
          <p>{ author.firstName }</p>
          <p>{ author.lastName }</p>
        </>
      )}
    </div>
  );
}

export default ViewAuthor;