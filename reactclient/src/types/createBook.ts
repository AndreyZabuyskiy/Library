export interface ICreateBookState {
  book: any,
  loading: boolean,
  error: null | string
}

export enum CreateBookTypes {
  FETCH_CREATE_BOOK = 'FETCH_CREATE_BOOK',
  FETCH_CREATE_BOOK_SUCCESS = 'FETCH_CREATE_BOOK_SUCCESS',
  FETCH_CREATE_BOOK_ERROR = 'FETCH_CREATE_BOOK_ERROR'
}

export interface FetchCreateBookAction {
  type: CreateBookTypes.FETCH_CREATE_BOOK;
}

export interface FetchCreateBookSuccessAction {
  type: CreateBookTypes.FETCH_CREATE_BOOK_SUCCESS;
  payload: any;
}

export interface FetchCreateBookErrorAction {
  type: CreateBookTypes.FETCH_CREATE_BOOK_ERROR;
  payload: string
}

export type CreateBookAction = FetchCreateBookAction 
  | FetchCreateBookSuccessAction
  | FetchCreateBookErrorAction