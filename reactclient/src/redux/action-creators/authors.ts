import { AuthorsAction, AuthorsActionTypes } from "../../types/autors"
import { Dispatch } from "react";
import axios from "axios";
import { BooksAction, BooksActionTypes } from "../../types/books";

export const fetchAuthors = () => {
  return async (dispatch: Dispatch<AuthorsAction>) => {
    try {
      dispatch({
          type: AuthorsActionTypes.FETCH_AUTHORS
      });
      
      const response = await axios.get('https://localhost:7068/api/Authors');
      
      setTimeout(() => {
        dispatch({type: AuthorsActionTypes.FETCH_AUTHORS_SUCCESS, payload: response.data.data});
      }, 500);
    } catch (e) {
      dispatch({
        type: AuthorsActionTypes.FETCH_AUTHORS_ERROR,
        payload: 'Ошибка при загрузке авторов'
      })
    }
  }
}