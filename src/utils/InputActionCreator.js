
class InputActionCreator {

  constructor(actions) {
    const [ INPUT ] = actions;

    this.actions = { INPUT };
  }

  receiveInput(input) {
    return (dispatch) => {
      type: this.actions.INPUT,
      input
    };
  }

}

export default InputActionCreator;
