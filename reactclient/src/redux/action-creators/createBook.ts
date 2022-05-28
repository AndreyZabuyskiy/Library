import { Dispatch } from "react";
import axios from "axios";
import { CreateBookAction, CreateBookTypes } from "../../types/createBook";

export function fetchCreateBook(book: any): any {
  return async (dispatch: Dispatch<CreateBookAction>) => {
    try{
      dispatch({
        type: CreateBookTypes.FETCH_CREATE_BOOK
      });
      
      const response = await axios.post(`https://localhost:7068/api/Books`, book);

      dispatch({
        type: CreateBookTypes.FETCH_CREATE_BOOK_SUCCESS,
        payload: response.data.data
      });
    }
    catch(e) {
      dispatch({
        type: CreateBookTypes.FETCH_CREATE_BOOK_ERROR,
        payload: "Ошибка при добавлении книги"
      });
    }
  }
}