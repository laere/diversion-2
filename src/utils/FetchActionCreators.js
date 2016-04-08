import axios from 'axios';

class FetchActionCreators {
  constructor(actions) {
    const [REQUEST, SUCCESS, FAILURE, STAR ] = actions;

    this.actions = {
      REQUEST,
      SUCCESS,
      FAILURE,
      STAR
    };
  }

  fetch({endpoint, params}) {
    return (dispatch) => {
      dispatch(this.request());

      return axios.get(endpoint, { params })
        .then(res => {
          dispatch(this.receive(this.actions.SUCCESS, res.data));
        })
        .catch(res => {
          dispatch(this.receive(this.actions.FAILURE));
        });
    };
  }

  request() {
    return {
      type: this.actions.REQUEST,
    };
  }

  receive(type, data) {
    return {
      type,
      data,
    };
  }

  starItem(id) {
    return (dispatch) => {
      dispatch({
        type: this.actions.STAR,
        id
      });
    };
  }

}



export default FetchActionCreators;
