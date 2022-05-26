import { combineReducers } from "redux";
import { authorReducer } from "./reducers/authorsReducer";
import { authorViewReducer } from "./reducers/authorViewReducer";
import { booksReducer } from "./reducers/booksReducer";
import { bookViewReducer } from "./reducers/bookViewReducer";
import { createAuthorReducer } from "./reducers/createAuthorReducer";

export const rootReducer = combineReducers({
  authors: authorReducer,
  books: booksReducer,
  authorView: authorViewReducer,
  bookView: bookViewReducer,
  createAuthor: createAuthorReducer
});

export type RootState = ReturnType<typeof rootReducer>;