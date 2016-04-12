import axios from 'axios';

export const CHANNEL_REQUEST = 'CHANNEL_REQUEST';
export const CHANNEL_SUCCESS = 'CHANNEL_SUCCESS';
export const CHANNEL_FAILURE = 'CHANNEL_FAILURE';
export const STAR_CHANNEL = 'STAR_CHANNEL';

export const request = () => {
  return {
    type: CHANNEL_REQUEST
  }
}

export const receive = (type, data) => {
  return {
    type,
    data,
  }
}

export const fetchChannel = ({endpoint}) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(endpoint)
      .then(res => {
        console.log(res);
        dispatch(receive(CHANNEL_SUCCESS, res.data));
      })
      .catch(res => {
        console.log(res);
        dispatch(receive(CHANNEL_FAILURE));
      });
  };
}

export const fetchEmotes = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url)
      .then(res => {
        console.log(res);
        dispatch(receive(CHANNEL_SUCCESS, res.data));
      })
      .catch(res => {
        console.log(res);
        dispatch(receive(CHANNEL_FAILURE));
      });
  };
}
