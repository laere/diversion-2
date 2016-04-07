export const STARRED = 'IS_STARRED';
export const UNSTARRED = 'UNSTARRED';

const INITIAL_STATE = {
  starCount: 0,
  isStarred: false
}

export const starAnItem = () => {
  return (dispatch) => {
    dispatch({
      type: STARRED
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
      }
    case UNSTARRED:
      if(state.isStarred === true) {
          return {
          ...state,
          starCount: state.starCount -1,
          isStarred: false
        }
      }
    default:
      return state;
  }
}
