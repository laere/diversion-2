import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import StreamsReducer from './StreamsReducer';
import VideosReducer from './VideosReducer';
import GamesReducer from './GamesReducer';
import ChannelsReducer from './ChannelsReducer'
import InputReducer from './InputReducer';
import UsersReducer from './UsersReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  streams: StreamsReducer,
  games: GamesReducer,
  videos: VideosReducer,
  channels: ChannelsReducer,
  input: InputReducer
});

export default rootReducer;
