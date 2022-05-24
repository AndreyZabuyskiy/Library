export interface IBooksState {
  books: any[];
  loading: boolean;
  error: null | string
}

export enum BooksActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
  FETCH_DELETE = "FETCH_DELETE"
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


export type BooksAction = FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction