import { CHANGE_ACTIVE_SCREEN } from './index';
export interface Session {
  activeScreen: string;
}

export interface ChangeScreenAction {
  type: typeof CHANGE_ACTIVE_SCREEN;
  payload: Session;
}

export type SessionActionTypes = ChangeScreenAction; // use "|" to add news actions;
