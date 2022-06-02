import { IUpdateBookState, UpdateBookAction, UpdateBookTypes,  } from "../../types/updateBook";

const initialState: IUpdateBookState = {
  book: null,
  loading: false,
  error: null,
  isUpdateBook: false,
  bookUpdated: null,
  authors: null
}

export const updateBookReducer = (state = initialState, action: UpdateBookAction): IUpdateBookState => {
  switch(action.type){
    case UpdateBookTypes.LOAD_BOOK: {
      return {
        loading: true,
        error: null,
        book: null,
        isUpdateBook: false,
        bookUpdated: null,
        authors: null
      }
    }

    case UpdateBookTypes.LOAD_BOOK_SUCCESS: {
      return {
        loading: false,
        error: null,
        book: action.payloadBook,
        isUpdateBook: false,
        bookUpdated: null,
        authors: action.payloadAuthors
      }
    }

    case UpdateBookTypes.LOAD_BOOK_ERROR: {
      return {
        loading: false,
        error: action.payload,
        book: null,
        isUpdateBook: false,
        bookUpdated: null,
        authors: null
      }
    }

    case UpdateBookTypes.FETCH_UPDATE_BOOK: {
      return {
        loading: true,
        error: null,
        book: null,
        isUpdateBook: false,
        bookUpdated: null,
        authors: null
      }
    }

    case UpdateBookTypes.FETCH_UPDATE_BOOK_SUCCESS: {
      return {
        loading: false,
        error: null,
        book: action.payloadBook,
        isUpdateBook: true,
        bookUpdated: action.payloadBook,
        authors: action.payloadAuthors
      }
    }

    case UpdateBookTypes.FETCH_UPDATE_BOOK_ERROR: {
      return {
        loading: false,
        error: action.payload,
        book: null,
        isUpdateBook: false,
        bookUpdated: null,
        authors: null
      }
    }

    default:
      return state;
  }
}