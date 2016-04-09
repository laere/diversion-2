import axios from 'axios';

export const STREAMS_REQUEST = 'STREAMS_REQUEST';
export const STREAMS_SUCCESS = 'STREAMS_SUCCESS';
export const STREAMS_FAILURE = 'STREAMS_FAILURE';
export const STAR_STREAM = 'STAR_STREAM';

export const star = (id, mediaType) => {
  return (dispatch) => {
    dispatch({
      type: STAR_STREAM,
      id,
      mediaType
    })
  }
}

export const request = () => {
  return {
    type: STREAMS_REQUEST
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
        dispatch(receive(STREAMS_SUCCESS, res.data));
      })
      .catch(res => {
        console.log(res);
        dispatch(receive(STREAMS_FAILURE));
      });
  };
}
