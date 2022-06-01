export interface IAuthorsState {
  authors: any[];
  loading: boolean;
  error: null | string
}

export enum AuthorsActionTypes {
  FETCH_AUTHORS = 'FETCH_AUTHORS',
  FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS',
  FETCH_AUTHORS_ERROR = 'FETCH_AUTHORS_ERROR',
  FETCH_AUTHORS_DELETE = 'FETCH_AUTHORS_DELETE',
  FETCH_SEARCH_AUTHORS = 'FETCH_SEARCH_AUTHORS',
  FETCH_SEARCH_SUCCESS_AUTHORS = 'FETCH_SEARCH_SUCCESS_AUTHORS',
  FETCH_SEARCH_ERROR_AUTHORS = 'FETCH_SEARCH_ERROR_AUTHORS'
}

export interface FetchAuthorsAction {
  type: AuthorsActionTypes.FETCH_AUTHORS;
}

export interface FetchAuthorsSuccessAction {
  type: AuthorsActionTypes.FETCH_AUTHORS_SUCCESS;
  payload: any[]
}

export interface FetchAuthorsErrorAction {
  type: AuthorsActionTypes.FETCH_AUTHORS_ERROR;
  payload: string
}

export interface FetchDeleteAction {
  type: AuthorsActionTypes.FETCH_AUTHORS_DELETE;
}

export interface FetchSearchAuthorsAction {
  type: AuthorsActionTypes.FETCH_SEARCH_AUTHORS;
}

export interface FetchSearchAuthorsSuccessAction {
  type: AuthorsActionTypes.FETCH_SEARCH_SUCCESS_AUTHORS;
  payload: any[]
}

export interface FetchSearchAuthorsErrorAction {
  type: AuthorsActionTypes.FETCH_SEARCH_ERROR_AUTHORS;
  payload: string
}

export type AuthorsAction = FetchAuthorsAction
  | FetchAuthorsErrorAction 
  | FetchAuthorsSuccessAction
  | FetchDeleteAction
  | FetchSearchAuthorsAction
  | FetchSearchAuthorsSuccessAction
  | FetchSearchAuthorsErrorAction