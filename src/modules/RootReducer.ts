import { combineReducers } from 'redux';
import auth from './Login/reducer';

const RootReducer = combineReducers({
  auth,
});

export type AppState = ReturnType<typeof RootReducer>;
export default RootReducer;
