export interface IAuthorViewState{
  author: any,
  loading: boolean,
  error: null | string
}

export enum AuthorActionTypes {
  FETCH_AUTHOR = "FETCH_AUTHOR",
  FETCH_AUTHOR_SUCCESS = "FETCH_AUTHOR_SUCCESS",
  FETCH_AUTHOR_ERROR = "FETCH_AUTHOR_ERROR"
}

export interface FetchAuthorAction {
  type: AuthorActionTypes.FETCH_AUTHOR;
}

export interface FetchAuthorSuccessAction {
  type: AuthorActionTypes.FETCH_AUTHOR_SUCCESS;
  payload: any;
}

export interface FetchAuthorErrorAction {
  type: AuthorActionTypes.FETCH_AUTHOR_ERROR;
  payload: string;
}

export type AuthorViewAction = FetchAuthorAction | FetchAuthorSuccessAction | FetchAuthorErrorAction