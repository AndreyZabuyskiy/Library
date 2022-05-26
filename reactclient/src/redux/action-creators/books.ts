import { Dispatch } from "react";
import axios from "axios";
import { BooksAction, BooksActionTypes } from "../../types/books";

export function fetchBooks (): any {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS
      });

      const response = await axios.get('https://localhost:7068/api/Books');
      dispatch({type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.data});
    } catch (e) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: 'Ошибка при загрузке книг'
      });
    }
  }
}

export function fetchDeleteBook(id: any): any {
  return async (dispatch: Dispatch<BooksAction>) => {
    try{
      dispatch({
        type: BooksActionTypes.FETCH_BOOK_DELETE
      });

      const responseDelete = await axios.delete('https://localhost:7068/api/Books/' + id);
      if(responseDelete){
        const response = await axios.get('https://localhost:7068/api/Books');
        dispatch({type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.data});
      }
    }
    catch (e) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: 'Ошибка удаления книги'
      });
    }
  }
}