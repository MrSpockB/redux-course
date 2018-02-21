import { all } from 'redux-saga/effects';
import userSaga from './user';
import cryptoSaga from './crypto';

export function* greetingsSaga() {
  console.log('Hi there!');
}

export default function* rootSaga() {
  console.log('redux saga setup ok');
  yield all([
    //add your sagas here:
    greetingsSaga(),
    userSaga(),
    cryptoSaga(),
  ]);
};