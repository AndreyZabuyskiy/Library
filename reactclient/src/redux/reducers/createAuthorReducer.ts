import { CreateAuthorAction, CreateAuthorTypes, ICreateAuthorState } from "../../types/createAuthor";

const initialState: ICreateAuthorState = {
  author: null,
  loading: false,
  error: null
}

export const createAuthorReducer = (state = initialState, action: CreateAuthorAction): ICreateAuthorState => {
  switch(action.type){
    case CreateAuthorTypes.FETCH_CREATE_AUTHOR:
      return {
        loading: true,
        error: null,
        author: null
      }

    case CreateAuthorTypes.FETCH_CREATE_AUTHOR_SUCCESS:
      return {
        loading: false,
        error: null,
        author: action.payload
      }

    case CreateAuthorTypes.FETCH_CREATE_AUTHOR_ERROR:
      return {
        loading: false,
        error: action.payload,
        author: null
      }

    default:
      return state;
  }
}