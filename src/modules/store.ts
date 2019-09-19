import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer, { AppState } from './RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default function getStore(): any {
  const middlewares = [logger];

  const enchanters = applyMiddleware(...middlewares);
  const composed = composeWithDevTools(enchanters);

  const persistedReducer = persistReducer(persistConfig, RootReducer);

  const store = createStore(persistedReducer, undefined, composed);
  const persistor = persistStore(store);

  return { store, persistor };
}
