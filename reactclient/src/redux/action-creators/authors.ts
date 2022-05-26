import { AuthorsAction, AuthorsActionTypes } from "../../types/autors"
import { Dispatch } from "react";
import axios from "axios";

export function fetchAuthors (): any {
  return async (dispatch: Dispatch<AuthorsAction>) => {
    try {
      dispatch({
        type: AuthorsActionTypes.FETCH_AUTHORS
      });
      
      const response = await axios.get('https://localhost:7068/api/Authors');
      dispatch({type: AuthorsActionTypes.FETCH_AUTHORS_SUCCESS, payload: response.data.data});
    } catch (e) {
      dispatch({
        type: AuthorsActionTypes.FETCH_AUTHORS_ERROR,
        payload: 'Ошибка при загрузке авторов'
      })
    }
  }
}

export function fetchDeleteAuthors (id: any): any {
  return async (dispatch: Dispatch<AuthorsAction>) => {
    try{
      dispatch({
        type: AuthorsActionTypes.FETCH_AUTHORS_DELETE
      });

      const responseDelete = await axios.delete('https://localhost:7068/api/Authors/' + id);
      if(responseDelete){
        const response = await axios.get('https://localhost:7068/api/Authors');
        dispatch({type: AuthorsActionTypes.FETCH_AUTHORS_SUCCESS, payload: response.data.data});
      }
    } catch (e) {
      dispatch({
        type: AuthorsActionTypes.FETCH_AUTHORS_ERROR,
        payload: 'Ошибка при удалении авторов'
      });
    }
  }
}