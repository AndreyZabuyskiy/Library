import { Dispatch } from "react";
import axios from "axios";
import { UpdateBookAction, UpdateBookTypes } from "../../types/updateBook";

export function loadBook(id: any): any {
  return async (dispatch: Dispatch<UpdateBookAction>) => {
    try {
      dispatch({
        type: UpdateBookTypes.LOAD_BOOK
      });
      
      const bookResponse = await axios.get('https://localhost:7068/api/Books/' + id);
      const authorsResponse = await axios.get('https://localhost:7068/api/Books/get-authors');
      
      dispatch({
        type: UpdateBookTypes.LOAD_BOOK_SUCCESS,
        payloadBook: bookResponse.data.data,
        payloadAuthors: authorsResponse.data.data
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

export function fetchUpdateBook(id: any, book: any): any {
  return async (dispatch: Dispatch<UpdateBookAction>) => {
    try{
      dispatch({
        type: UpdateBookTypes.FETCH_UPDATE_BOOK
      });
      
      const updateBookResponse = await axios.put(`https://localhost:7068/api/Books/${id}`, book);
      const authorsResponse = await axios.get('https://localhost:7068/api/Books/get-authors');

      dispatch({
        type: UpdateBookTypes.FETCH_UPDATE_BOOK_SUCCESS,
        payloadBook: updateBookResponse.data.data,
        payloadAuthors: authorsResponse.data.data
      });
      alert(`${book.title} обновлен!`)
    }
    catch (e) {
      dispatch({
        type: UpdateBookTypes.FETCH_UPDATE_BOOK_ERROR,
        payload: "Ошибка обновления книги"
      });
    }
  }
}