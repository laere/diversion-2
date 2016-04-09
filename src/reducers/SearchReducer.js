import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions/SearchActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
        received: Date.now()
      }
    case SEARCH_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state;
  }
}
