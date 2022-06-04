import { Dispatch } from "react";
import axios from "axios";
import { CreateBookAction, CreateBookTypes } from "../../types/createBook";

export function fetchLoadAuthors(): any {
  return async (dispatch: Dispatch<CreateBookAction>) => {
    try{
      dispatch({
        type: CreateBookTypes.FETCH_LOAD_AUTHORS
      });

      const responseAuthors = await axios.get('https://localhost:7068/api/Authors');
      dispatch({
        type: CreateBookTypes.FETCH_LOAD_AUTHORS_SUCCESS,
        payload: responseAuthors.data.data
      });
    }
    catch (e) {
      dispatch({
        type: CreateBookTypes.FETCH_LOAD_AUTHORS_ERROR,
        payload: "Ошибка загрузки авторов"
      });
    }
  }
}

export function fetchCreateBook(book: any): any {
  return async (dispatch: Dispatch<CreateBookAction>) => {
    try{
      dispatch({
        type: CreateBookTypes.FETCH_CREATE_BOOK
      });
      
      const response = await axios.post(`https://localhost:7068/api/Books`, book);
      const responseAuthors = await axios.get('https://localhost:7068/api/Authors');

      dispatch({
        type: CreateBookTypes.FETCH_CREATE_BOOK_SUCCESS,
        payloadBook: response.data.data,
        payloadAuthors: responseAuthors.data.data
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