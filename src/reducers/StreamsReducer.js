import { indexBy } from 'lodash';
import dotProp from 'dot-prop-immutable';
import { STREAMS_REQUEST, STREAMS_SUCCESS, STREAMS_FAILURE, STAR_STREAM, UNSTAR_STREAM } from '../actions/StreamActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  receivedAt: null,
  nextPageUrl: null,
  pageCount: 0,
  streamIds: [],
  starCount: 0
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
      streamIds: action.data.streams.map(x => {
        return x._id;
      }),
      fetching: false,
      nextPageUrl: action.data._links.next,
      pageCount: state.pageCount + 1,
      receivedAt: Date.now()
    }
    case STREAMS_FAILURE:
    return {
      ...state,
      fetching: false
    }
    case STAR_STREAM:
    if(state.streamIds.find(id => action.id === id)) {
      let index = state.streamIds.indexOf(action.id);
      return {
        ...state,
        starCount: state.starCount + 1,
        data: [
          ...state.data.slice(0, index), {
            ...state.data[index],
              starred: true
            },
            ...state.data.slice(index + 1)
          ]
        };
      }
    case UNSTAR_STREAM:
      return state;
    default:
      return state;
    }
  }
