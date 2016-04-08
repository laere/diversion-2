import { combineReducers } from 'redux';

import StreamsReducer from './StreamsReducer';
import VideosReducer from './VideosReducer';
import GamesReducer from './GamesReducer';
import ChannelsReducer from './ChannelsReducer'
import SearchReducer from './SearchReducer';

const rootReducer = combineReducers({
  streams: StreamsReducer,
  games: GamesReducer,
  videos: VideosReducer,
  channels: ChannelsReducer,
  searchResults: SearchReducer
});

export default rootReducer;
