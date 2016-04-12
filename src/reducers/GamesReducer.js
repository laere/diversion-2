import { GAMES_REQUEST, GAMES_SUCCESS, GAMES_FAILURE } from '../actions/GameActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null,
  gameIds: [],
  nextPageUrl: null,
  prevPageUrl: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GAMES_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case GAMES_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
        received: Date.now(),
        gameIds: action.data.top.map(x => x.game._id),
        nextPageUrl: action.data._links.next,
        prevPageUrl: action.data._links.prev
      }
    case GAMES_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state;
  }
}
