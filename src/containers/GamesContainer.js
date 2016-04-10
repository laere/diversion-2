import React, { PropTypes } from 'react';
import Games from '../components/Games';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetch, gamePagination } from '../actions/GameActions';
import { GAMES_URL } from '../endpoints/endpoints';

class GamesContainer extends React.Component {
  static propTypes = {
    games: PropTypes.object.isRequired,
    nextPageUrl: PropTypes.string
  };

  componentDidMount() {
    const { games, fetchGames } = this.props;
    if (!games.data) {
      fetchGames();
    }
  }

  render() {
    const { games } = this.props;
    return games.fetching ?
      <Loading name='Loading...'/> :
      <Games games={games}/>;
    }
  }

  function mapStateToProps(state) {
    return {
      games: state.games,
      nextPageUrl: state.games.nextPageUrl
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchGames: (endpoint) => dispatch(fetch(GAMES_URL)),
      nextPage: (nextPageUrl) => dispatch(gamePagination(nextPageUrl))
    }
  }

  export default connect(mapStateToProps)(GamesContainer);
