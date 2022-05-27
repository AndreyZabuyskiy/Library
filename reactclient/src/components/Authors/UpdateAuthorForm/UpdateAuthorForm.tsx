import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { LoadAuthor } from "../../../redux/action-creators/updateAuthor";

const UpdateAuthorForm: React.FC = () => {
  const { author, loading, error, isUpdateAuthor, authorUpdated } = useTypesSelector(state => state.updateAuthor);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const id = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadAuthor(id))
  }, [id]);

  return (
    <div>
      {author && (
        <div>Update author form</div>  
      )}
    </div>
  );
}

export default UpdateAuthorForm;