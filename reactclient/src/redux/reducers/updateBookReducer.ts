import { IUpdateBookState, UpdateBookAction, UpdateBookTypes,  } from "../../types/updateBook";

const initialState: IUpdateBookState = {
  book: null,
  loading: false,
  error: null,
  isUpdateBook: false,
  bookUpdated: null
}

export const updateBookReducer = (state = initialState, action: UpdateBookAction): IUpdateBookState => {
  switch(action.type){
    case UpdateBookTypes.LOAD_BOOK: {
      return {
        loading: true,
        error: null,
        book: null,
        isUpdateBook: false,
        bookUpdated: null
      }
    }

    case UpdateBookTypes.LOAD_BOOK_SUCCESS: {
      return {
        loading: false,
        error: null,
        book: action.payload,
        isUpdateBook: false,
        bookUpdated: null
      }
    }

    case UpdateBookTypes.LOAD_BOOK_ERROR: {
      return {
        loading: false,
        error: action.payload,
        book: null,
        isUpdateBook: false,
        bookUpdated: null
      }
    }

    case UpdateBookTypes.FETCH_UPDATE_BOOK: {
      return {
        loading: true,
        error: null,
        book: null,
        isUpdateBook: false,
        bookUpdated: null
      }
    }

    case UpdateBookTypes.FETCH_UPDATE_BOOK_SUCCESS: {
      return {
        loading: false,
        error: null,
        book: action.payload,
        isUpdateBook: true,
        bookUpdated: action.payload
      }
    }

    case UpdateBookTypes.FETCH_UPDATE_BOOK_ERROR: {
      return {
        loading: false,
        error: action.payload,
        book: null,
        isUpdateBook: false,
        bookUpdated: null
      }
    }

    default:
      return state;
  }
}