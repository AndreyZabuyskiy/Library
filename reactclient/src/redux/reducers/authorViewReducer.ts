import { IAuthorViewState, AuthorViewAction, AuthorActionTypes } from "../../types/authorView";

const initialState: IAuthorViewState = {
  author: undefined,
  loading: false,
  error: null
}

export const authorViewReducer = (state = initialState, action: AuthorViewAction): IAuthorViewState => {
  switch(action.type) {
    case AuthorActionTypes.FETCH_AUTHOR:
      return {
        loading: true,
        error: null,
        author: undefined
      };
    
    case AuthorActionTypes.FETCH_AUTHOR_SUCCESS:
      return {
        loading: false,
        error: null,
        author: action.payload
      };

    case AuthorActionTypes.FETCH_AUTHOR_ERROR:
      return {
        loading: false,
        error: action.payload,
        author: undefined
      };
    
      default:
        return state;
  }
}