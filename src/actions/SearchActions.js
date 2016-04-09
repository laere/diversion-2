import axios from 'axios';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const request = () => {
  return {
    type: SEARCH_REQUEST
  }
}

export const receive = (type, data) => {
  return {
    type,
    data,
  }
}

export const fetchSearchResults = ({endpoint}) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(endpoint)
      .then(res => {
        console.log(res);
        dispatch(receive(SEARCH_SUCCESS, res.data));
      })
      .catch(res => {
        console.log(res);
        dispatch(receive(SEARCH_FAILURE));
      });
  };
}
