import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchCreateAuthor } from "../../../redux/action-creators/createAuthor";

const CreateAuthor: React.FC = () => {
  const {author, loading, error} = useTypesSelector(state => state.createAuthor);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();

  const changeHandlerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const changeHandlerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent) => {
   dispatch(fetchCreateAuthor({
      firstName,
      lastName
    }));
  }

  return (
    <div className="container">
      <div className="form-group">
        <input type="text" value={firstName} onChange={changeHandlerFirstName} className="form-control" placeholder="first name" />
      </div>

      <br />

      <div className="form-group">
        <input type="text" value={lastName} onChange={changeHandlerLastName} className="form-control" placeholder="last name" />
      </div>

      <br />
      
      <div className="form-group">
        <button type="button" className="btn btn-success" onClick={clickHandler}>Create</button>
      </div>
    </div>
  );
}

export default CreateAuthor;