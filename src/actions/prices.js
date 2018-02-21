const GET_PRICES_REQUESTED = 'GET_PRICES_REQUESTED';
const GET_PRICES_COMPLETED = 'GET_PRICES_COMPLETED';
const GET_PRICES_FAILED = 'GET_PRICES_FAILED';

const getPricesRequested = () => ({
  type: GET_PRICES_REQUESTED,
});

const getPricesCompleted = prices => ({
  type: GET_PRICES_COMPLETED,
  prices,
});

const getPricesFailed = error => ({
  type: GET_PRICES_FAILED,
  error,
});

export default {
  types: {
    GET_PRICES_REQUESTED,
    GET_PRICES_COMPLETED,
    GET_PRICES_FAILED,
  },
  creators: {
    getPricesRequested,
    getPricesCompleted,
    getPricesFailed,
  },
};

