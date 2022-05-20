import { Dispatch } from "react";
import axios from "axios";
import { BooksAction, BooksActionTypes } from "../../types/books";

export const fetchBooks = () => {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS
      });

      const response = await axios.get('https://localhost:7068/api/Books');
      
      setTimeout(() => {
        dispatch({type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.data});
      }, 500);
    } catch (e) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: 'Ошибка при загрузке книг'
      });
    }
  }
}