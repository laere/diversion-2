import FetchActionCreators from '../utils/FetchActionCreators';
import FetchReducerPrototype from '../utils/FetchReducerPrototype';

const REQUEST_SEARCH = 'REQUEST_SEARCH';
const RECEIVE_SEARCH_SUCCESS = 'RECEIVE_SEARCH_SUCCESS';
const RECEIVE_SEARCH_FAILURE = 'RECEIVE_SEARCH_FAILURE';

export const searchFetchActions = new FetchActionCreators(
  [
    REQUEST_SEARCH,
    RECEIVE_SEARCH_SUCCESS,
    RECEIVE_SEARCH_FAILURE
  ]
);

export default new FetchReducerPrototype(searchFetchActions);
