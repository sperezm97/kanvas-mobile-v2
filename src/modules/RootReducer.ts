import { combineReducers } from 'redux';
import Session from './Session';

const RootReducer = combineReducers({
  session: Session,
});

export type AppState = ReturnType<typeof RootReducer>;
export default RootReducer;
