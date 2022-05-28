import { combineReducers } from "redux";
import { authorReducer } from "./reducers/authorsReducer";
import { authorViewReducer } from "./reducers/authorViewReducer";
import { booksReducer } from "./reducers/booksReducer";
import { bookViewReducer } from "./reducers/bookViewReducer";
import { createAuthorReducer } from "./reducers/createAuthorReducer";
import { createBookReducer } from "./reducers/createBookReducer";
import { updateAuthorReducer } from "./reducers/updateAuthorReducer";
import { updateBookReducer } from "./reducers/updateBookReducer";

export const rootReducer = combineReducers({
  authors: authorReducer,
  books: booksReducer,
  authorView: authorViewReducer,
  bookView: bookViewReducer,
  createAuthor: createAuthorReducer,
  updateAuthor: updateAuthorReducer,
  updateBook: updateBookReducer,
  createBook: createBookReducer
});

export type RootState = ReturnType<typeof rootReducer>;