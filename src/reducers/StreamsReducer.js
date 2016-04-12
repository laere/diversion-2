import * as actions from '../actions/StreamActions';
import dotProp from 'dot-prop-immutable';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  receivedAt: null,
  nextPageUrl: null,
  prevPageUrl: null,
  streamIds: [],
  starredItems: []
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
        streamIds: action.data.streams.map(x => x._id),
        nextPageUrl: action.data._links.next,
        prevPageUrl: action.data._links.prev,
      }
    case actions.STREAMS_FAILURE:
      return {
        ...state,
        fetching: false
      }
    case actions.STAR_STREAM:
      if(state.streamIds.find(id => action.id === id)) {
        let index = state.streamIds.indexOf(action.id);
        return {
          ...state,
          starredItems: state.starredItems.concat(state.data[index]),
          data: [
            ...state.data.slice(0, index), {
              ...state.data[index],
                starred: true
              },
              ...state.data.slice(index + 1)
            ]
          };
        }
    case actions.UNSTAR_STREAM:
      if(state.streamIds.find(id => action.id === id)) {
        let index = state.streamIds.indexOf(action.id);
        return {
          ...state,
          starredItems: [...state.starredItems.slice(index)],
          data: [
            ...state.data.slice(0, index), {
              ...state.data[index],
                starred: false
              },
              ...state.data.slice(index + 1)
            ]
          };
        }
    default:
      return state;
    }
  }
