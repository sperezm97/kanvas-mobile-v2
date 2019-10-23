import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { createOffline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import createSagaMiddleware from 'redux-saga';

import RootReducer, { AppState } from './rootReducer';
import rootWatch from './rootSagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: [''],
  whitelist: [''],
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

function setStore() {
  const persistedReducer = persistReducer(
    persistConfig,
    offlineEnhanceReducer(RootReducer),
  );

  const store = createStore(persistedReducer, composed);
  sagasMiddleware.run(rootWatch);

  const persistor = persistStore(store);

  return { store, persistor };
}

const { store, persistor } = setStore();
export { store, persistor };
