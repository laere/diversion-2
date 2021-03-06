import axios from 'axios';

export const STREAMS_REQUEST = 'STREAMS_REQUEST';
export const STREAMS_SUCCESS = 'STREAMS_SUCCESS';
export const STREAMS_FAILURE = 'STREAMS_FAILURE';
export const STAR_STREAM = 'STAR_STREAM';
export const UNSTAR_STREAM = 'UNSTAR_STREAM';
export const NEXT_PAGE = 'NEXT_PAGE';
export const SAVE_ITEM = 'SAVE_ITEM';

export const star = (id) => {
  return (dispatch) => {
    dispatch({
      type: STAR_STREAM,
      id
    })
  }
}

export const unstar = (id) => {
  return (dispatch) => {
    dispatch({
      type: UNSTAR_STREAM,
      id
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
      dispatch(receive(STREAMS_SUCCESS, res.data));
    })
    .catch(res => {
      dispatch(receive(STREAMS_FAILURE));
    });
  };
}

export const streamPagination = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url)
    .then(res => {
      dispatch(receive(STREAMS_SUCCESS, res.data));
    })
    .catch(res => {
      dispatch(receive(STREAMS_FAILURE));
    });
  };
}
