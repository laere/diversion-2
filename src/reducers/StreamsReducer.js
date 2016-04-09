import dotProp from 'dot-prop-immutable';
import { STREAMS_REQUEST, STREAMS_SUCCESS, STREAMS_FAILURE, STAR_STREAM } from '../actions/StreamActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case STREAMS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case STREAMS_SUCCESS:
      return {
        ...state,
        data: action.data.streams.map(x => {
          x['starred'] = false;
          return x;
        }),
        fetching: false,
        received: Date.now()
      }
    case STREAMS_FAILURE:
      return {
        ...state,
        fetching: false
      }
    case STAR_STREAM:

    default:
      return state;
  }
}
