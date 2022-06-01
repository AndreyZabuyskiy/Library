export interface IBooksState {
  books: any[];
  loading: boolean;
  error: null | string
}

export enum BooksActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
  FETCH_BOOK_DELETE = "FETCH_DELETE",
  FETCH_SEARCH_BOOKS = "FETCH_SEARCH_BOOKS",
  FETCH_SEARCH_BOOKS_SUCCESS = "FETCH_SEARCH_BOOKS_SUCCESS",
  FETCH_SEARCH_BOOKS_ERROR = "FETCH_SEARCH_BOOKS_ERROR"
}

export interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS;
}

export interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
  payload: any[]
}

export interface FetchBooksErrorAction {
  type: BooksActionTypes.FETCH_BOOKS_ERROR;
  payload: string
}

export interface FetchDeleteAction {
  type: BooksActionTypes.FETCH_BOOK_DELETE
}

export interface FetchSearchBooksAction {
  type: BooksActionTypes.FETCH_SEARCH_BOOKS;
}

export interface FetchSearchBooksSuccessAction {
  type: BooksActionTypes.FETCH_SEARCH_BOOKS_SUCCESS;
  payload: any[]
}

export interface FetchSearchBooksErrorAction {
  type: BooksActionTypes.FETCH_SEARCH_BOOKS_ERROR;
  payload: string
}


export type BooksAction = FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction
  | FetchDeleteAction
  | FetchSearchBooksAction
  | FetchSearchBooksSuccessAction
  | FetchSearchBooksErrorAction