import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('redux saga setup ok');
  yield all([
    //add your sagas here:
  ]);
};