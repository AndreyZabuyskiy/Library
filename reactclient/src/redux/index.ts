import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootRedicer';

export const store = createStore(rootReducer, applyMiddleware(thunk));