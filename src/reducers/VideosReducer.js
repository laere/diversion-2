import { VIDEOS_REQUEST, VIDEOS_SUCCESS, VIDEOS_FAILURE } from '../actions/VideoActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case VIDEOS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case VIDEOS_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
        received: Date.now()
      }
    case VIDEOS_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state;
  }
}
