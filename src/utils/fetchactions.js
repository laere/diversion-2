import axios from 'axios';

const actions = {
  REQUEST: 'REQUESTS',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

const request = () => {
  return {
    type: actions.REQUEST
  }
}

const require = (type, data) => {
  return {
    typ,
    data
  }
}

export const fetch = ({endpoint}) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(endpoint)
      .then(res => {
        dispatch(require(actions.SUCCESS, res.data))
      })
      .catch(res => {
        dispatch(require(actions.FAILURE));
      })
  }
}
