import { CreateBookAction, CreateBookTypes, ICreateBookState } from "../../types/createBook";

const initialState: ICreateBookState = {
  book: null,
  loading: false,
  error: null
}

export const createBookReducer = (state = initialState, action: CreateBookAction): ICreateBookState => {
  switch(action.type){
    case CreateBookTypes.FETCH_CREATE_BOOK:
      return {
        loading: true,
        error: null,
        book: null
      }

    case CreateBookTypes.FETCH_CREATE_BOOK_SUCCESS:
      return {
        loading: false,
        error: null,
        book: action.payload
      }

    case CreateBookTypes.FETCH_CREATE_BOOK_ERROR:
      return {
        loading: false,
        error: action.payload,
        book: null
      }

    default:
      return state;
  }
}