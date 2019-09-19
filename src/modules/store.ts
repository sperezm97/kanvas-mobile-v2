import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer, { AppState } from './RootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function getStore(): any {
  const middlewares = [logger];

  const enchanters = applyMiddleware(...middlewares);
  const composed = composeWithDevTools(enchanters);

  const store = createStore(RootReducer, undefined, composed);

  return store;
}
