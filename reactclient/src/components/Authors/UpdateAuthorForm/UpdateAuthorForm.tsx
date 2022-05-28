import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchUpdateAuthor, loadAuthor } from "../../../redux/action-creators/updateAuthor";

const UpdateAuthorForm: React.FC = () => {
  const { author, loading, error, isUpdateAuthor, authorUpdated } = useTypesSelector(state =>
    state.updateAuthor);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const {id} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuthor(id))
  }, [id]);

  const changeHandlerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const changeHandlerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent) => {
    dispatch(fetchUpdateAuthor(author.id, {
       firstName,
       lastName
     }));
   }

  return (
    <div>
      {author && (
        renderUpdateForm()
      )}
    </div>
  );

  function renderUpdateForm() {
    return (
      <div className="container">
        <h1>{ author.firstName } { author.lastName }</h1>

        <div className="form-group">
          <input type="text" value={firstName} onChange={changeHandlerFirstName} className="form-control" placeholder="first name" />
        </div>
    
        <br />
    
        <div className="form-group">
          <input type="text" value={lastName} onChange={changeHandlerLastName} className="form-control" placeholder="last name" />
        </div>
    
        <br />
          
        <div className="form-group">
          <button type="button" onClick={clickHandler} className="btn btn-success form-control">Update</button>
        </div>
      </div>
    );
  }
}

export default UpdateAuthorForm;