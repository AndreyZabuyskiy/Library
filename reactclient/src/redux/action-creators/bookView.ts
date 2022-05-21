import { Dispatch } from "react";
import axios from "axios";
import { BookActionTypes, BookViewAction } from "../../types/bookView";

export const fetchBookView = (id: any) => {
  return async (dispatch: Dispatch<BookViewAction>) => {
    try{
      dispatch({
        type: BookActionTypes.FETCH_BOOK
      });

      const response = await axios.get('https://localhost:7068/api/Books/' + id);
      
      dispatch({
        type: BookActionTypes.FETCH_BOOK_SUCCESS,
        payload: response.data.data
      });
    } catch(e) {
      dispatch({
        type: BookActionTypes.FETCH_BOOK_ERROR,
        payload: "Ошибка загрузки книги"
      });
    }
  }
}