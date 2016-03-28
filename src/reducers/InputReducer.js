import InputActionCreator from '../utils/InputActionCreator';

const GET_CHANNEL_INPUT = 'GET_CHANNEL_INPUT';

const INITIAL_STATE = {
  input: ''
}

export const getChannelInput = new InputActionCreator( [GET_CHANNEL_INPUT] );

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_CHANNEL_INPUT:
      return Object.assign({}, state, {
        input: action.payload
      });
      console.log(state);
    default:
      return state;
  }
}
