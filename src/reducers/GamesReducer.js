import dotProp from 'dot-prop-immutable';
import { GAMES_REQUEST, GAMES_SUCCESS, GAMES_FAILURE, STAR_GAME } from '../actions/GameActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  received: null,
  gameIds: [],
  nextPageUrl: null,
  pageCount: 0
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
        pageCount: state.pageCount + 1
      }
    case GAMES_FAILURE:
      return {
        ...state,
        fetching: false
      }
    case STAR_GAME:
      return state;
    default:
      return state;
  }
}
