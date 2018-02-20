const GET_PRICES_REQUESTED = 'GET_PRICES_REQUESTED';
const GET_PRICES_COMPLETED = 'GET_PRICES_COMPLETED';
const GET_PRICES_FAILED = 'GET_PRICES_FAILED';

function getPricesRequested() {
  return (dispatch, getState) => {
      dispatch({type : GET_PRICES_REQUESTED});

      fetch('http://159.65.72.172/prices', {})
          .then((resp) => resp.json())
          .then(
              response => dispatch({type : GET_PRICES_COMPLETED, payload : response}),
              error => dispatch({type : GET_PRICES_FAILED, error : error})
          );
  };
}

export default {
  types: {
    GET_PRICES_REQUESTED,
    GET_PRICES_COMPLETED,
    GET_PRICES_FAILED,
  },
  creators: {
    getPricesRequested,
  },
};

