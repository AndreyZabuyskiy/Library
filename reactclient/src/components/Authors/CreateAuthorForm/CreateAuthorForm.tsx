import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { fetchCreateAuthor } from "../../../redux/action-creators/createAuthor";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const CreateAuthorForm: React.FC = () => {
  const {author, loading, error} = useTypesSelector(state => state.createAuthor);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());

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
      lastName,
      dateOfBirth: {
        day: dateOfBirth?.getDate(),
        month: (dateOfBirth?.getMonth()) + 1,
        year: dateOfBirth?.getFullYear()
      }
    }));
  }

  return (
    <div className="container">
      <div className="form-group">
        <input type="text" value={firstName}
          onChange={changeHandlerFirstName}
          className="form-control"
          placeholder="first name" />
      </div>

      <br />

      <div className="form-group">
        <input type="text"
          value={lastName}
          onChange={changeHandlerLastName}
          className="form-control"
          placeholder="last name" />
      </div>

      <br />

      <div className="form-group">
        <DatePicker className="form-control"
        selected={dateOfBirth}
        onChange={setDateOfBirth}
        dateFormat="MM/dd/yyyy" />
      </div>

      <br />
      
      <div className="form-group">
        <button type="button"
        className="btn btn-success form-control"
        placeholder="date of birth"
        onClick={clickHandler}>
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateAuthorForm;