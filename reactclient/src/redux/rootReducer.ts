import { combineReducers } from "redux";
import { authorReducer } from "./reducers/authorsReducer";
import { authorViewReducer } from "./reducers/authorViewReducer";
import { booksReducer } from "./reducers/booksReducer";

export const rootReducer = combineReducers({
  authors: authorReducer,
  books: booksReducer,
  authorView: authorViewReducer
});

export type RootState = ReturnType<typeof rootReducer>;