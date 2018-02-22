import prices from '../actions/prices';

const initialState = {
  BTC: 0,
  ETH: 0,
  LTC: 0,
  XRP: 0,
  fetching: false,
  exerciseData: {
    level2: 'select me!',
  }
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
        ...action.prices,
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
