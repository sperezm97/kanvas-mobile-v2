import { combineReducers } from 'redux';

const RootReducer = combineReducers({});

export type AppState = ReturnType<typeof RootReducer>;
export default RootReducer;
