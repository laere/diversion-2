import { STREAMS_REQUEST, STREAMS_SUCCESS, STREAMS_FAILURE, STAR_STREAM, UNSTAR_STREAM, NEXT_PAGE } from '../actions/StreamActions';

const INITIAL_STATE = {
  data: null,
  fetching: true,
  receivedAt: null,
  nextPageUrl: null,
  featuredStreams: null,
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
      fetching: false,
      receivedAt: Date.now(),
      streamIds: action.data.streams.map(x => x._id),
      nextPageUrl: action.data._links.next,
      featuredStreams: action.data._links.featured,
      pageCount: state.pageCount + 1,
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
    if(state.streamIds.find(id => action.id === id)) {
      let index = state.streamIds.indexOf(action.id);
      return {
        ...state,
        starCount: state.starCount + 1,
        data: [
          ...state.data.slice(0, index), {
            ...state.data[index],
              starred: false
            },
            ...state.data.slice(index + 1)
          ]
        };
      }
      return state;
    case NEXT_PAGE:
      return state;
    default:
      return state;
    }
  }
