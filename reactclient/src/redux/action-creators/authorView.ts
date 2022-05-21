import { AuthorViewAction, AuthorActionTypes } from '../../types/authorView';
import { Dispatch } from "react";
import axios from "axios";

export const fetchAuthorView = (id: any) => {
  return async (dispatch: Dispatch<AuthorViewAction>) => {
    try{
      dispatch({
        type: AuthorActionTypes.FETCH_AUTHOR
      });

      const response = await axios.get('https://localhost:7068/api/Authors/' + id);
      
      dispatch({
        type: AuthorActionTypes.FETCH_AUTHOR_SUCCESS,
        payload: response.data.data
      });
    } catch(e) {
      dispatch({
        type: AuthorActionTypes.FETCH_AUTHOR_ERROR,
        payload: "Ошибка при загрузке автора!"
      });
    }
  }
}