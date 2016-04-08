export const STARRED = 'IS_STARRED';
export const UNSTARRED = 'UNSTARRED';

const INITIAL_STATE = {
  starredList: [],
  starCount: 0,
  isStarred: false,
  starID: 0
}

export const starAnItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: STARRED,
      payload: id
    })
  }
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case STARRED:
      return {
        ...state,
        starCount: state.starCount + 1,
        isStarred: true,
        starID: action.payload
      }
    default:
      return state;
  }
}
