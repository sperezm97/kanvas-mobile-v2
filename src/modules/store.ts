import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createOffline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults/index';
import createSagaMiddleware from 'redux-saga';

import RootReducer, { AppState } from './rootReducer';
import rootWatch from './rootSagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const {
  middleware: offlineMiddleware,
  enhanceReducer: offlineEnhanceReducer,
  enhanceStore: offlineEnhanceStore,
} = createOffline({
  ...offlineConfig,
  persist: false,
});
const sagasMiddleware = createSagaMiddleware();

const middlewares = [logger, offlineMiddleware, sagasMiddleware];
const composed = composeWithDevTools(
  offlineEnhanceStore,
  applyMiddleware(...middlewares),
);

const persistedReducer = persistReducer(
  persistConfig,
  offlineEnhanceReducer(RootReducer),
);

const store = createStore(persistedReducer, composed);
sagasMiddleware.run(rootWatch);

const persistor = persistStore(store);

export { store, persistor };
