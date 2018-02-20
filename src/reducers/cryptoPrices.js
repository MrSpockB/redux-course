import prices from '../actions/prices';

const initialState = {
  BTC: 8500,
  ETH: 860,
  LTC: 155,
  XRP: .98,
  fetching: false,
};

// Method just to change object keys to upper case
const toUpperKeys = item => {
  for(const key in item){
      const upper = key.toUpperCase();
      // check if it already wasn't uppercase
      if( upper !== key ){
          item[ upper ] = item[key];
          delete item[key];
      }
  }
  return item;
};

const cryptoPricesReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case prices.types.GET_PRICES_REQUESTED:
      return {
        ...state,
        fetching: true,
      };
    case prices.types.GET_PRICES_COMPLETED:
      return {
        ...state,
        fetching: false,
        ...toUpperKeys(action.payload.prices),
      };
    case prices.types.GET_PRICES_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default cryptoPricesReducer;
