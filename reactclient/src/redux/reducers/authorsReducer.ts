import { AuthorsAction, AuthorsActionTypes, IAuthorsState } from "../../types/autors";

const FETCH_AUTHORS = 'FETCH_AUTHORS';
const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';
const FETCH_AUTHORS_ERROR = 'FETCH_AUTHORS_ERROR';

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

    default:
      return state;
  }
}