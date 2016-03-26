import FetchActionCreators from '../utils/FetchActionCreators';
import FetchReducerPrototype from '../utils/FetchReducerPrototype';

const REQUEST_CHANNELS = 'REQUEST_CHANNELS';
const RECEIVE_CHANNELS_SUCCESS = 'RECEIVE_CHANNELS_SUCCESS';
const RECEIVE_CHANNELS_FAILURE = 'RECEIVE_CHANNELS_FAILURE';

export const channelsFetchActions = new FetchActionCreators(
  'https://api.twitch.tv/kraken/channels/lirik',
  [
    REQUEST_CHANNELS,
    RECEIVE_CHANNELS_SUCCESS,
    RECEIVE_CHANNELS_FAILURE
  ]
);

export default new FetchReducerPrototype(channelsFetchActions);
