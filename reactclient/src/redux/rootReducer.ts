import { combineReducers } from "redux";
import { authorReducer } from "./reducers/authorsReducer";

export const rootReducer = combineReducers({
  authors: authorReducer
});

export type RootState = ReturnType<typeof rootReducer>;