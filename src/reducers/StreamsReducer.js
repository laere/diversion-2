import * as actions from '../actions/StreamActions';
import dotProp from 'dot-prop-immutable';
import { findIndex } from 'lodash';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  receivedAt: null,
  nextPageUrl: null,
  prevPageUrl: null,
  starredItems: [],
  streamIds: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actions.STREAMS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case actions.STREAMS_SUCCESS:
      return {
        ...state,
        data: action.data.streams.map(x => {
          x['starred'] = false;
          return x;
        }),
        fetching: false,
        receivedAt: Date.now(),
        nextPageUrl: action.data._links.next,
        prevPageUrl: action.data._links.prev,
        streamIds: action.data.streams.map(x => x._id)
      }
    case actions.STREAMS_FAILURE:
      return {
        ...state,
        fetching: false
      }
      case actions.STAR_STREAM:
        var index = state.streamIds.indexOf(action.id);
        state = dotProp.set(state, `data.${index}.starred`, true);
        state = dotProp.set(state, 'starredItems', starredItems => state.data[index]);
        return state;
      case actions.UNSTAR_STREAM:
        var starredIndex = _.findIndex(state.starredItems, o => o._id === action.id);
        var index = state.streamIds.indexOf(action.id);
        state = dotProp.set(state, `data.${index}.starred`, false);
        state = dotProp.delete(state, `starredItems.${starredIndex}`);
        return state;
      default:
        return state;
  }
}
