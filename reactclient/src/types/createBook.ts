export interface ICreateBookState {
  book: any,
  loading: boolean,
  error: null | string,
  authors: any[] | null
}

export enum CreateBookTypes {
  FETCH_CREATE_BOOK = 'FETCH_CREATE_BOOK',
  FETCH_CREATE_BOOK_SUCCESS = 'FETCH_CREATE_BOOK_SUCCESS',
  FETCH_CREATE_BOOK_ERROR = 'FETCH_CREATE_BOOK_ERROR',
  FETCH_LOAD_AUTHORS = 'FETCH_LOAD_AUTHORS',
  FETCH_LOAD_AUTHORS_SUCCESS = 'FETCH_LOAD_AUTHORS_SUCCESS',
  FETCH_LOAD_AUTHORS_ERROR = 'FETCH_LOAD_AUTHORS_ERROR'
}

export interface FetchCreateBookAction {
  type: CreateBookTypes.FETCH_CREATE_BOOK;
}

export interface FetchCreateBookSuccessAction {
  type: CreateBookTypes.FETCH_CREATE_BOOK_SUCCESS;
  payloadBook: any;
  payloadAuthors: any;
}

export interface FetchCreateBookErrorAction {
  type: CreateBookTypes.FETCH_CREATE_BOOK_ERROR;
  payload: string
}

export interface FetchLoadAuthorsAction {
  type: CreateBookTypes.FETCH_LOAD_AUTHORS;
}

export interface FetchLoadAuthorsSuccessAction {
  type: CreateBookTypes.FETCH_LOAD_AUTHORS_SUCCESS;
  payload: any
}

export interface FetchLoadAuthorsErrorAction {
  type: CreateBookTypes.FETCH_LOAD_AUTHORS_ERROR;
  payload: any
}

export type CreateBookAction = FetchCreateBookAction 
  | FetchCreateBookSuccessAction
  | FetchCreateBookErrorAction
  | FetchLoadAuthorsAction
  | FetchLoadAuthorsSuccessAction
  | FetchLoadAuthorsErrorAction