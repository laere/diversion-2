import { VIDEOS_REQUEST, VIDEOS_SUCCESS, VIDEOS_FAILURE } from '../actions/VideoActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null,
  videoIds: []
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
        data: action.data.videos.map(x => {
          x['starred'] = false;
          return x;
        }),
        fetching: false,
        received: Date.now(),
        videoIds: action.data.videos.map(x => x._id)
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
