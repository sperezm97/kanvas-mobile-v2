import { put, call, takeLatest } from 'redux-saga/effects';
import { SIGN_IN, ERROR_SIGN_IN } from './actions';
import api from '@config/api';
// call generators functions
export function* signIn(data: object) {
  try {
    yield call(api.signIn, data);
  } catch (error) {
    yield put({ type: ERROR_SIGN_IN, error });
  }
}
// watchers

export function* watchLogin() {
  yield takeLatest(SIGN_IN, signIn);
}
