import { CreateBookAction, CreateBookTypes, ICreateBookState } from "../../types/createBook";

const initialState: ICreateBookState = {
  book: null,
  loading: false,
  error: null,
  authors: null
}

export const createBookReducer = (state = initialState, action: CreateBookAction): ICreateBookState => {
  switch(action.type){
    case CreateBookTypes.FETCH_CREATE_BOOK:
      return {
        loading: true,
        error: null,
        book: null,
        authors: null
      }

    case CreateBookTypes.FETCH_CREATE_BOOK_SUCCESS:
      return {
        loading: false,
        error: null,
        book: action.payloadBook,
        authors: action.payloadAuthors
      }

    case CreateBookTypes.FETCH_CREATE_BOOK_ERROR:
      return {
        loading: false,
        error: action.payload,
        book: null,
        authors: null
      }

    case CreateBookTypes.FETCH_LOAD_AUTHORS:
      return {
        loading: true,
        error: null,
        book: null,
        authors: null
      }

    case CreateBookTypes.FETCH_LOAD_AUTHORS_SUCCESS:
      return {
        loading: false,
        error:  null,
        book: null,
        authors: action.payload
      }

    case CreateBookTypes.FETCH_LOAD_AUTHORS_ERROR:
      return {
        loading: false,
        error: action.payload,
        book: null,
        authors: null
      }

    default:
      return state;
  }
}