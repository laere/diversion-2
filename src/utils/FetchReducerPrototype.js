class FetchReducerPrototype {
  static initialState = {
    data: null,
    fetching: true,
    receivedAt: null,
  };

  constructor({ actions }) {
    this.actions = actions;
    return this.reducer;
  }

  reducer = (state = FetchReducerPrototype.initialState, action = {}) => {
    switch (action.type) {
      case this.actions.REQUEST:
        return Object.assign({}, state, {
          fetching: true,
        });

      case this.actions.SUCCESS:
        return Object.assign({}, state, {
          data: action.data,
          fetching: false,
          receivedAt: Date.now(),
        });

      case this.actions.FAILURE:
        return Object.assign({}, state, {
          fetching: false,
        });

      default:
        return state;
    }
  }
}

export default FetchReducerPrototype;
