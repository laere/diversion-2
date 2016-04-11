import * as actions from '../actions/VideoActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null,
  videoIds: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actions.VIDEOS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case actions.VIDEOS_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
        received: Date.now(),
        videoIds: action.data.videos.map(x => x._id)
      }
    case actions.VIDEOS_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state;
  }
}
