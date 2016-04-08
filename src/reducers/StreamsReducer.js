import FetchActionCreators from '../utils/FetchActionCreators';
import FetchReducerPrototype from '../utils/FetchReducerPrototype';

const REQUEST_STREAMS = 'REQUEST_STREAMS';
const RECEIVE_STREAMS_SUCCESS = 'RECEIVE_STREAMS_SUCCESS';
const RECEIVE_STREAMS_FAILURE = 'RECEIVE_STREAMS_FAILURE';
const STAR_STREAM = 'STAR_STREAM'

export const streamsFetchActions = new FetchActionCreators(
  [
    REQUEST_STREAMS,
    RECEIVE_STREAMS_SUCCESS,
    RECEIVE_STREAMS_FAILURE,
    STAR_STREAM
  ]
);

export default new FetchReducerPrototype(streamsFetchActions);
