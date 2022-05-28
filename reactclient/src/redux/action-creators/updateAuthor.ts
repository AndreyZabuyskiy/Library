import { Dispatch } from "react";
import axios from "axios";
import { UpdateAuthorAction, UpdateAuthorTypes } from "../../types/updateAuthor";

export function loadAuthor(id: any): any {
  return async (dispatch: Dispatch<UpdateAuthorAction>) => {
    try{
      dispatch({
        type: UpdateAuthorTypes.LOAD_AUTHOR
      });
      
      const response = await axios.get('https://localhost:7068/api/Authors/' + id);
      
      dispatch({
        type: UpdateAuthorTypes.LOAD_AUTHOR_SUCCESS,
        payload: response.data.data
      });
    }
    catch (e) {
      dispatch({
        type: UpdateAuthorTypes.FETCH_UPDATE_AUTHOR_ERROR,
        payload: "Ошибка при загрузке автора"
      });
    }
  }
}

export function fetchUpdateAuthor(id: any, author: any): any {
  return async (dispatch: Dispatch<UpdateAuthorAction>) => {
    try {
      dispatch({
        type: UpdateAuthorTypes.FETCH_UPDATE_AUTHOR
      });
      debugger;
      const response = await axios.put(`https://localhost:7068/api/Authors/${id}`, author);
      
      dispatch({
        type: UpdateAuthorTypes.FETCH_UPDATE_AUTHOR_SUCCESS,
        payload: response.data.data
      });
    }
    catch (e) {
      dispatch({
        type: UpdateAuthorTypes.FETCH_UPDATE_AUTHOR_ERROR,
        payload: "Ошибка обновления автора"
      });
    }
  }
}