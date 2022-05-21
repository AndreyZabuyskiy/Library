import { IBookViewState, BookViewAction, BookActionTypes } from "../../types/bookView";

const initialState: IBookViewState = {
  book: undefined,
  loading: false,
  error: null
}

export const bookViewReducer = (state = initialState, action: BookViewAction): IBookViewState => {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOK:
      return {
        loading: true,
        error: null,
        book: null
      };

    case BookActionTypes.FETCH_BOOK_SUCCESS:
      return {
        loading: false,
        book: action.payload,
        error: null
      };

    case BookActionTypes.FETCH_BOOK_ERROR:
      return {
        loading: false,
        book: null,
        error: action.payload
      };

    default:
      return state;
  }
}