import { Dispatch } from "react";
import axios from "axios";
import { CreateAuthorTypes, CreateAuthorAction } from "../../types/createAuthor";

export function fetchCreateAuthor(author: any): any {
  return async (dispatch: Dispatch<CreateAuthorAction>) => {
    try{
      dispatch({
        type: CreateAuthorTypes.FETCH_CREATE_AUTHOR
      });

      const response = await axios.post(`https://localhost:7068/api/Authors`, author);
      debugger;
    }
    catch(e) {
      dispatch({
        type: CreateAuthorTypes.FETCH_CREATE_AUTHOR_ERROR,
        payload: "Ошибка при создании автора"
      });
    }
  }
}