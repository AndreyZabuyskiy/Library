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

      const authors = authorsResponse.data.data;
      const book = bookResponse.data.data;
      const authorsFilter = authors.filter(author => author.id !== book.author.id);
      
      dispatch({
        type: UpdateBookTypes.LOAD_BOOK_SUCCESS,
        payloadBook: bookResponse.data.data,
        payloadAuthors: authorsFilter
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
      const bookResponse = await axios.get('https://localhost:7068/api/Books/' + id);
      const authorsResponse = await axios.get('https://localhost:7068/api/Books/get-authors');

      const authors = authorsResponse.data.data;
      const _book = bookResponse.data.data;
      const authorsFilter = authors.filter(author => author.id !== _book.author.id);
      
      dispatch({
        type: UpdateBookTypes.FETCH_UPDATE_BOOK_SUCCESS,
        payloadBook: bookResponse.data.data,
        payloadAuthors: authorsFilter
      });
    }
    catch (e) {
      dispatch({
        type: UpdateBookTypes.FETCH_UPDATE_BOOK_ERROR,
        payload: "Ошибка обновления книги"
      });
    }
  }
}