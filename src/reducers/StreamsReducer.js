import { REQUEST, SUCCESS, FAILURE } from '../actions/StreamActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case REQUEST:
      return {
        ...state,
        fetching: true
      }
    case SUCCESS:
      return {
        ...state,
        data: action.data.streams.map(x => {
          x['starred'] = false;
          return x;
        }),
        fetching: false,
        received: Date.now()
      }
    case FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state;
  }
}
