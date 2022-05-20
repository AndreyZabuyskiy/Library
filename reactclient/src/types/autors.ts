export interface IAuthorsState {
  authors: any[];
  loading: boolean;
  error: null | string
}

export enum AuthorsActionTypes {
  FETCH_AUTHORS = 'FETCH_AUTHORS',
  FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS',
  FETCH_AUTHORS_ERROR = 'FETCH_AUTHORS_ERROR'
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

export type AuthorsAction = FetchAuthorsAction | FetchAuthorsErrorAction | FetchAuthorsSuccessAction