class FetchReducerPrototype {
  static initialState = {
    data: null,
    fetching: true,
    receivedAt: null,
    starred: false,
    starId: 0,
  };

  constructor({ actions }) {
    this.actions = actions;
    return this.reducer;
  }

  reducer = (state = FetchReducerPrototype.initialState, action) => {
    switch (action.type) {
      case this.actions.REQUEST:
        return {
          ...state,
          fetching: true
        }

      case this.actions.SUCCESS:
        return {
          ...state,
          data: action.data,
          fetching: false,
          receivedAt: Date.now()
        }

      case this.actions.FAILURE:
        return {
          ...state,
          fetching: false
        }

      case this.actions.STAR:
          return {
            ...state,
            starred: true,
            starId: action.id,
          }

      default:
        return state;
    }
  }
}

export default FetchReducerPrototype;
