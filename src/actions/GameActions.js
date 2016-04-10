import axios from 'axios';

export const GAMES_REQUEST = 'GAMES_REQUEST';
export const GAMES_SUCCESS = 'GAMES_SUCCESS';
export const GAMES_FAILURE = 'GAMES_FAILURE';
export const STAR_GAME = 'STAR_GAME';

export const star = (id) => {
  return (dispatch) => {
    dispatch({
      type: STAR_GAME,
      id
    })
  }
}

export const request = () => {
  return {
    type: GAMES_REQUEST
  }
}

export const receive = (type, data) => {
  return {
    type,
    data,
  }
}

export const fetchGames = ({endpoint}) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(endpoint)
      .then(res => {
        dispatch(receive(GAMES_SUCCESS, res.data));
      })
      .catch(res => {
        dispatch(receive(GAMES_FAILURE));
      });
  };
}

export const gamePagination = (nextPageUrl) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(nextPageUrl)
      .then(res => {
        dispatch(receive(GAMES_SUCCESS, res.data));
      })
      .catch(res => {
        dispatch(receive(GAMES_FAILURE));
      });
  };
}
