import InputActionCreator from '../utils/InputActionCreator';

export const GET_INPUT = 'GET_INPUT';

const INITIAL_STATE = {
  input: ''
}

export const getChannelInput = new InputActionCreator( [GET_INPUT] );
export const getStreamsSearchResults = new InputActionCreator( [GET_INPUT] );

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_INPUT:
      return Object.assign({}, state, {
        input: action.payload
      });
      console.log(state);
    default:
      return state;
  }
}
