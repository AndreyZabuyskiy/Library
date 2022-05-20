import { AuthorsAction, AuthorsActionTypes } from "../../types/autors"
import { Dispatch } from "react";
import axios from "axios";

export const fetchAuthors = () => {
  return async (dispatch: Dispatch<AuthorsAction>) => {
    try {
      dispatch({
          type: AuthorsActionTypes.FETCH_AUTHORS
      });
      const response = await axios.get('https://localhost:7068/api/Authors');
      debugger;
      dispatch({type: AuthorsActionTypes.FETCH_AUTHORS_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({
        type: AuthorsActionTypes.FETCH_AUTHORS_ERROR,
        payload: 'Ошибка при загрузке авторов'
      })
    }
  }
}