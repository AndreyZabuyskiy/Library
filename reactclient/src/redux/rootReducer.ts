import { combineReducers } from "redux";
import { authorReducer } from "./reducers/authorsReducer";
import { booksReducer } from "./reducers/booksReducer";

export const rootReducer = combineReducers({
  authors: authorReducer,
  books: booksReducer
});

export type RootState = ReturnType<typeof rootReducer>;