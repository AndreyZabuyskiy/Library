import { Dispatch } from "react";
import axios from "axios";
import { UpdateBookAction, UpdateBookTypes } from "../../types/updateBook";

export function loadBook(id: any): any {
  return async (dispatch: Dispatch<UpdateBookAction>) => {
    try {
      dispatch({
        type: UpdateBookTypes.LOAD_BOOK
      });

      const response = await axios.get('https://localhost:7068/api/Books/' + id);

      dispatch({
        type: UpdateBookTypes.LOAD_BOOK_SUCCESS,
        payload: response.data.data
      });
    }
    catch (e) {
      dispatch({
        type: UpdateBookTypes.LOAD_BOOK_ERROR,
        payload: "Ошибка при загрузки книги"
      });
    }
  }
}