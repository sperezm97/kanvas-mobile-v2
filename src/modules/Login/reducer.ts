import * as action from './actions';

const initialState = {
  token: '',
  isLoading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case action.SET_TOKEN:
      return { ...state, ...payload };

    case action.IS_LOADING_SIGN_IN:
      return { ...state, ...payload };

    case action.ERROR_SIGN_IN:
      return { ...state, ...payload };

    default:
      return state;
  }
};

// Selectors
