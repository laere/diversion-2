
class InputActionCreator {
  constructor(actions) {
    const [ GET_INPUT ] = actions;

    this.actions = { GET_INPUT };
  }

  receiveInput(input) {
    return (dispatch) => {
      type: this.actions.GET_INPUT,
      input
    }
  }

}

export default InputActionCreator;
