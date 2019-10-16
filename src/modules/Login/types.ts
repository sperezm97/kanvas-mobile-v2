import * as action from './actions';

// Login interfaces
export interface IUserInfoStore {
  data: {
    username: string;
    password: string;
  };
}

// Action Types Actions
interface ISetTokenAction {
  type: typeof action.SET_TOKEN;
  payload: string;
}

export type IActionLogin = ISetTokenAction; // to add new actions use '|' plus actions
