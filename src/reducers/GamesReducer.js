import FetchActionCreators from '../utils/FetchActionCreators';
import FetchReducerPrototype from '../utils/FetchReducerPrototype';

const REQUEST_GAMES = 'REQUEST_GAMES';
const RECEIVE_GAMES_SUCCESS = 'RECEIVE_GAMES_SUCCESS';
const RECEIVE_GAMES_FAILURE = 'RECEIVE_GAMES_FAILURE';

export const gamesFetchActions = new FetchActionCreators(
  [
    REQUEST_GAMES,
    RECEIVE_GAMES_SUCCESS,
    RECEIVE_GAMES_FAILURE
  ]
);

export default new FetchReducerPrototype(gamesFetchActions);
