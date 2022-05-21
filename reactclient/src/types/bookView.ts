export interface IBookViewState {
  book: any,
  loading: boolean,
  error: null | string
}

export enum BookActionTypes {
  FETCH_BOOK = 'FETCH_BOOK',
  FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS',
  FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR'
}

export interface FetchBookAction {
  type: BookActionTypes.FETCH_BOOK;
}

export interface FetchBookSuccessAction {
  type: BookActionTypes.FETCH_BOOK_SUCCESS;
  payload: any;
}

export interface FetchBookErrorAction {
  type: BookActionTypes.FETCH_BOOK_ERROR,
  payload: string
}

export type BookViewAction = FetchBookAction | FetchBookErrorAction | FetchBookSuccessAction