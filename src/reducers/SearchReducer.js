import * as actions from '../actions/SearchActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actions.SEARCH_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case actions.SEARCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
        received: Date.now()
      }
    case actions.SEARCH_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state;
  }
}
