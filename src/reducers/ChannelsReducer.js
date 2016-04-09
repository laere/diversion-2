import { CHANNEL_REQUEST, CHANNEL_SUCCESS, CHANNEL_FAILURE, STAR_CHANNEL } from '../actions/ChannelActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANNEL_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case CHANNEL_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
        received: Date.now()
      }
    case CHANNEL_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state;
  }
}
