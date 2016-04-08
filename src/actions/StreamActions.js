import axios from 'axios';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const request = () => {
  return {
    type: REQUEST
  }
}

export const receive = (type, data) => {
  return {
    type,
    data,
  }
}

export const fetch = ({endpoint}) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(endpoint)
      .then(res => {
        console.log(res);
        dispatch(receive(SUCCESS, res.data));
      })
      .catch(res => {
        console.log(res);
        dispatch(receive(FAILURE));
      });
  };
}
