import * as actions from '../actions/ChannelActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actions.CHANNEL_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case actions.CHANNEL_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
        received: Date.now()
      }
    case actions.CHANNEL_FAILURE:
      return {
        ...state,
        fetching: false
      }

    default:
      return state;
  }
}
