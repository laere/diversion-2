import FetchActionCreators from '../utils/FetchActionCreators';
import FetchReducerPrototype from '../utils/FetchReducerPrototype';

const REQUEST_USERS = 'REQUEST_USERS';
const RECEIVE_USERS_SUCCESS = 'RECEIVE_USERS_SUCCESS';
const RECEIVE_USERS_FAILURE = 'RECEIVE_USERS_FAILURE';

export const usersFetchActions = new FetchActionCreators(
  'https://api.twitch.tv/kraken/users/lirik',
  [
    REQUEST_USERS,
    RECEIVE_USERS_SUCCESS,
    RECEIVE_USERS_FAILURE
  ]
);

export default new FetchReducerPrototype(usersFetchActions);
