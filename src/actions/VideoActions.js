import axios from 'axios';

export const VIDEOS_REQUEST = 'VIDEOS_REQUEST';
export const VIDEOS_SUCCESS = 'VIDEOS_SUCCESS';
export const VIDEOS_FAILURE = 'VIDEOS_FAILURE';
export const STAR_VIDEO = 'STAR_VIDEO';

export const star = (id) => {
  return (dispatch) => {
    dispatch({
      type: STAR_VIDEO,
      id
    })
  }
}

export const request = () => {
  return {
    type: VIDEOS_REQUEST
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
        dispatch(receive(VIDEOS_SUCCESS, res.data));
      })
      .catch(res => {
        console.log(res);
        dispatch(receive(VIDEOS_FAILURE));
      });
  };
}
