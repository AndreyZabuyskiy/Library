import { Dispatch } from "react";
import axios from "axios";
import { UpdateAuthorAction, UpdateAuthorTypes } from "../../types/updateAuthor";

export function LoadAuthor(id: any): any {
  return async (dispatch: Dispatch<UpdateAuthorAction>) => {
    try{
      dispatch({
        type: UpdateAuthorTypes.LOAD_AUTHOR
      });

      const response = await axios.get(`https://localhost:7068/api/Authors/` + id);
      debugger;
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