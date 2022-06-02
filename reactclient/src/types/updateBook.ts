export interface IUpdateBookState {
  book: any,
  loading: boolean,
  error: null | string,
  bookUpdated: any,
  isUpdateBook: boolean,
  authors: any[] | null
}

export enum UpdateBookTypes {
  LOAD_BOOK = 'LOAD_BOOK',
  LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS',
  LOAD_BOOK_ERROR = 'LOAD_BOOK_ERROR',
  FETCH_UPDATE_BOOK = 'FETCH_UPDATE_BOOK',
  FETCH_UPDATE_BOOK_SUCCESS = 'FETCH_UPDATE_BOOK_SUCCESS',
  FETCH_UPDATE_BOOK_ERROR = 'FETCH_UPDATE_BOOK_ERROR'
}

export interface LoadBookAction {
  type: UpdateBookTypes.LOAD_BOOK
}

export interface LoadBookSuccessAction {
  type: UpdateBookTypes.LOAD_BOOK_SUCCESS,
  payloadBook: any,
  payloadAuthors: any
}

export interface LoadBookErrorAction {
  type: UpdateBookTypes.LOAD_BOOK_ERROR,
  payload: any
}

export interface FetchUpdateBookAction {
  type: UpdateBookTypes.FETCH_UPDATE_BOOK
}

export interface FetchUpdateBookSuccessAction {
  type: UpdateBookTypes.FETCH_UPDATE_BOOK_SUCCESS,
  payloadBook: any,
  payloadAuthors: any
}

export interface FetchUpdateBookErrorAction {
  type: UpdateBookTypes.FETCH_UPDATE_BOOK_ERROR,
  payload: any
}

export type UpdateBookAction = LoadBookAction
  | LoadBookSuccessAction
  | LoadBookErrorAction
  | FetchUpdateBookAction
  | FetchUpdateBookSuccessAction
  | FetchUpdateBookErrorAction