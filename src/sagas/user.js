import { call, takeEvery, put } from 'redux-saga/effects';
import { loadUser } from '../api/user';
import user from '../actions/user';
import price from '../actions/prices';

export function* loadUserSaga() {
  console.log('[SAGA] loadUserSaga...');
  try {
    const userResponse = yield call(loadUser);
    yield put(user.creators.getUserCompleted(userResponse));
    if (userResponse.authenticated) {
      yield put(price.creators.getPricesRequested());
    }
  } catch (error) {
    yield put(user.creators.getUserFailed(error), error);
  }
}

export default function* userSaga() {
  yield takeEvery('GET_USER_REQUESTED', loadUserSaga);
}