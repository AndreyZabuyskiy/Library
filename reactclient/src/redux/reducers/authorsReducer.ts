import { AuthorsAction, AuthorsActionTypes, IAuthorsState } from "../../types/autors";

const initialState: IAuthorsState = {
  authors: [],
  loading: false,
  error: null
}

export const authorReducer = (state = initialState, action: AuthorsAction): IAuthorsState => {
  switch (action.type) {
    case AuthorsActionTypes.FETCH_AUTHORS:
      return { 
        loading: true,
        error: null,
        authors: []
      };
    
    case AuthorsActionTypes.FETCH_AUTHORS_SUCCESS:
      return { 
        loading: false,
        error: null,
        authors: action.payload
      };

      case AuthorsActionTypes.FETCH_AUTHORS_ERROR:
        return { 
          loading: false,
          error: action.payload,
          authors: []
        };

      case AuthorsActionTypes.FETCH_AUTHORS_DELETE:
        return {
          loading: false,
          error: null,
          authors: []
        };

      case AuthorsActionTypes.FETCH_SEARCH_AUTHORS:
        return {
          loading: false,
          error: null,
          authors: []
        };

      case AuthorsActionTypes.FETCH_SEARCH_SUCCESS_AUTHORS:
        return {
          loading: false,
          error: null,
          authors: action.payload
        };

      case AuthorsActionTypes.FETCH_SEARCH_ERROR_AUTHORS:
        return {
          loading: false,
          error: action.payload,
          authors: []
        };

    default:
      return state;
  }
}