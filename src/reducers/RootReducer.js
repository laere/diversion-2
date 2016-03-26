import { combineReducers } from 'redux';

import StreamsReducer from './StreamsReducer';
import VideosReducer from './VideosReducer';
import GamesReducer from './GamesReducer';
import ChannelsReducer from './ChannelsReducer'
import InputReducer from './InputReducer';


const rootReducer = combineReducers({
  streams: StreamsReducer,
  games: GamesReducer,
  videos: VideosReducer,
  channels: ChannelsReducer,
  input: InputReducer
});

export default rootReducer;
