const GET_USER_REQUESTED = 'GET_USER_REQUESTED';
const GET_USER_COMPLETED = 'GET_USER_COMPLETED';
const GET_USER_FAILED = 'GET_USER_FAILED';

const getUserRequested = () => ({
  type: GET_USER_REQUESTED,
});

const getUserCompleted = user => ({
  type: GET_USER_COMPLETED,
  user,
});

const getUserFailed = error => ({
  type: GET_USER_FAILED,
  error,
});

export default {
  types: {
    GET_USER_REQUESTED,
    GET_USER_COMPLETED,
    GET_USER_FAILED,
  },
  creators: {
    getUserRequested,
    getUserCompleted,
    getUserFailed,
  },
};
