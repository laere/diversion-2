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
  streamIds: [],
  keyword: ''
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
        var starredIndex = state.streamIds.indexOf(action.id);
        state = dotProp.set(state, `data.${starredIndex}.starred`, true);
        state = dotProp.set(state, 'starredItems', starredItems => [...starredItems, state.data[index]]);
        return state;
      case actions.UNSTAR_STREAM:
        var index = _.findIndex(state.starredItems, o => o._id === action.id);
        var starredIndex = state.streamIds.indexOf(action.id);
        console.log('starred index: ' + starredIndex);
        console.log('delete index: ' + index);
        state = dotProp.set(state, `data.${starredIndex}.starred`, false);
        state = dotProp.delete(state, `starredItems.${index}`);
        return state;
      default:
        return state;
  }
}
