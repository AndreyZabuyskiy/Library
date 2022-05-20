const FETCH_AUTHORS = 'FETCH_AUTHORS';
const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';
const FETCH_AUTHORS_ERROR = 'FETCH_AUTHORS_ERROR';

interface IAuthorsState {
  authors: any[];
  loading: boolean;
  error: null | string
}

enum AuthorsActionTypes {
  FETCH_AUTHORS = 'FETCH_AUTHORS',
  FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS',
  FETCH_AUTHORS_ERROR = 'FETCH_AUTHORS_ERROR'
}

interface FetchAuthorsAction {
  type: AuthorsActionTypes.FETCH_AUTHORS;
}

interface FetchAuthorsSuccessAction {
  type: AuthorsActionTypes.FETCH_AUTHORS_SUCCESS;
  payload: any[]
}

interface FetchAuthorsErrorAction {
  type: AuthorsActionTypes.FETCH_AUTHORS_ERROR;
  payload: string
}

type AuthorsAction = FetchAuthorsAction | FetchAuthorsErrorAction | FetchAuthorsSuccessAction

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