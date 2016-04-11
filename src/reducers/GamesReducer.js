import * as actions from '../actions/GameActions';

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
    case actions.GAMES_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case actions.GAMES_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
        received: Date.now(),
        gameIds: action.data.top.map(x => x.game._id),
        nextPageUrl: action.data._links.next,
        pageCount: state.pageCount + 1
      }
    case actions.GAMES_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state;
  }
}
