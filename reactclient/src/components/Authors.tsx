import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useTypesSelector } from "../hooks/useTypeSelector";
import { fetchAuthors } from "../redux/action-creators/authors";

const Authors: React.FC = () => {
  const {authors, error, loading} = useTypesSelector(state => state.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthors())
  }, []);

  return (
    <div>

    </div>
  );
}

export default Authors;