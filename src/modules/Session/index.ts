import { AppState } from './../RootReducer';
import { SessionActionTypes, Session } from './types';
// Imports

// Actions
export const CHANGE_ACTIVE_SCREEN = 'CHANGE_ACTIVE_SCREEN';

// Reducers
const initialState: Session = {
  activeScreen: '',
};

export default (
  state = initialState,
  { type, payload }: SessionActionTypes,
) => {
  switch (type) {
    case CHANGE_ACTIVE_SCREEN:
      return { ...state, actionScreen: payload };

    default:
      return state;
  }
};

// Action Creators
export const changeActiveScreen = (
  activeScreen: Session,
): SessionActionTypes => ({
  type: CHANGE_ACTIVE_SCREEN,
  payload: activeScreen,
});

// Selectors
export const getActiveScreen = (state: AppState) => state.session.activeScreen;
