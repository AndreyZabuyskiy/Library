import { IUpdateAuthorState, UpdateAuthorAction, UpdateAuthorTypes } from "../../types/updateAuthor";

const initialState: IUpdateAuthorState = {
  author: null,
  loading: false,
  error: null,
  isUpdateAuthor: false,
  authorUpdated: null
}

export const updateAuthorReducer = (state = initialState, action: UpdateAuthorAction): IUpdateAuthorState => {
  switch(action.type) {
    case UpdateAuthorTypes.LOAD_AUTHOR: {
      return {
        loading: true,
        error: null,
        author: null,
        isUpdateAuthor: false,
        authorUpdated: null
      }
    }

    case UpdateAuthorTypes.LOAD_AUTHOR_SUCCESS: {
      return {
        loading: false,
        error: null,
        author: action.payload,
        isUpdateAuthor: false,
        authorUpdated: null
      }
    }

    case UpdateAuthorTypes.LOAD_AUTHOR_ERROR: {
      return {
        loading: false,
        error: action.payload,
        author: null,
        isUpdateAuthor: false,
        authorUpdated: null
      }
    }
    
    case UpdateAuthorTypes.FETCH_UPDATE_AUTHOR:{
      return {
        loading: true,
        error: null,
        author: null,
        isUpdateAuthor: false,
        authorUpdated: null
      }
    }

    case UpdateAuthorTypes.FETCH_UPDATE_AUTHOR_SUCCESS:
      return {
        loading: false,
        error: null,
        author: action.payload,
        isUpdateAuthor: true,
        authorUpdated: action.payload
      }

    case UpdateAuthorTypes.FETCH_UPDATE_AUTHOR_ERROR:
      return {
        loading: false,
        error: action.payload,
        author: null,
        isUpdateAuthor: false,
        authorUpdated: null
      }

    default:
      return state;
  }
}