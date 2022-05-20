import { combineReducers } from "redux";
import { authorReducer } from "./reducers/authorsReducer";

export const rootReducer = combineReducers({
  author: authorReducer
});