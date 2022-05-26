export interface ICreateAuthorState {
  author: any,
  loading: boolean,
  error: null | string
}

export enum CreateAuthorTypes {
  FETCH_CREATE_AUTHOR = 'FETCH_CREATE_AUTHOR',
  FETCH_CREATE_AUTHOR_SUCCESS = 'FETCH_CREATE_AUTHOR_SUCCESS',
  FETCH_CREATE_AUTHOR_ERROR = 'FETCH_CREATE_AUTHOR_ERROR'
}

export interface FetchCreateAuthorAction {
  type: CreateAuthorTypes.FETCH_CREATE_AUTHOR;
}

export interface FetchCreateAuthorSuccessAction {
  type: CreateAuthorTypes.FETCH_CREATE_AUTHOR_SUCCESS;
  payload: any;
}

export interface FetchCreateAuthorErrorAction {
  type: CreateAuthorTypes.FETCH_CREATE_AUTHOR_ERROR;
  payload: string
}

export type CreateAuthorAction = FetchCreateAuthorAction 
  | FetchCreateAuthorSuccessAction
  | FetchCreateAuthorErrorAction