import FetchActionCreators from '../utils/FetchActionCreators';
import FetchReducerPrototype from '../utils/FetchReducerPrototype';

const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
const RECEIVE_VIDEOS_SUCCESS = 'RECEIVE_VIDEOS_SUCCESS';
const RECEIVE_VIDEOS_FAILURE = 'RECEIVE_VIDEOS_FAILURE';

export const videosFetchActions = new FetchActionCreators(
  'https://api.twitch.tv/kraken/videos/top?limit=100',
  [
    REQUEST_VIDEOS,
    RECEIVE_VIDEOS_SUCCESS,
    RECEIVE_VIDEOS_FAILURE
  ]
);

export default new FetchReducerPrototype(videosFetchActions);
