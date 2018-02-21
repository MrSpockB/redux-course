import { call, takeEvery, put } from 'redux-saga/effects';
import { loadPrices } from '../api/crypto';
import prices from '../actions/prices';


export function* loadPricesSaga() {
  console.log('[SAGA] loadPricesSaga...');
  try {
    const pricesResponse = yield call(loadPrices);
    yield put(prices.creators.getPricesCompleted(pricesResponse));
  } catch (error) {
    yield put(prices.creators.getPricesFailed(error));
  }
}

export default function* cryptoSaga() {
  yield takeEvery(prices.types.GET_PRICES_REQUESTED, loadPricesSaga);
}