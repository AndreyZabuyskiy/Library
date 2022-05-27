export interface IUpdateAuthorState {
  author: any,
  loading: boolean,
  error: null | string,
  authorUpdated: any,
  isUpdateAuthor: boolean
}

export enum UpdateAuthorTypes {
  LOAD_AUTHOR = 'LOAD_AUTHOR',
  LOAD_AUTHOR_SUCCESS = 'LOAD_AUTHOR_SUCCESS',
  LOAD_AUTHOR_ERROR = 'LOAD_AUTHOR_ERROR',
  FETCH_UPDATE_AUTHOR = 'FETCH_UPDATE_AUTHOR',
  FETCH_UPDATE_AUTHOR_SUCCESS = 'FETCH_UPDATE_AUTHOR_SUCCESS',
  FETCH_UPDATE_AUTHOR_ERROR = 'FETCH_UPDATE_AUTHOR_ERROR'
}

export interface LoadAuthorAction {
  type: UpdateAuthorTypes.LOAD_AUTHOR;
}

export interface LoadAuthorSuccessAction {
  type: UpdateAuthorTypes.LOAD_AUTHOR_SUCCESS;
  payload: any;
}

export interface LoadAuthorErrorAction {
  type: UpdateAuthorTypes.LOAD_AUTHOR_ERROR,
  payload: any;
}

export interface FetchUpdateAuthorAction {
  type: UpdateAuthorTypes.FETCH_UPDATE_AUTHOR;
}

export interface FetchUpdateAuthorSuccessAction {
  type: UpdateAuthorTypes.FETCH_UPDATE_AUTHOR_SUCCESS;
  payload: any;
}

export interface FetchUpdateAuthorErrorAction {
  type: UpdateAuthorTypes.FETCH_UPDATE_AUTHOR_ERROR;
  payload: string
}

export type UpdateAuthorAction =
  | LoadAuthorAction
  | LoadAuthorSuccessAction
  | LoadAuthorErrorAction
  | FetchUpdateAuthorAction
  | FetchUpdateAuthorSuccessAction
  | FetchUpdateAuthorErrorAction