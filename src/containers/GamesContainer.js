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

  constructor(props) {
    super(props);
    this.handleGamePagination = this.handleGamePagination.bind(this);
  }

  componentDidMount() {
    const { games, fetchGames } = this.props;
    if (!games.data) {
      fetchGames();
    }
  }

  handleGamePagination() {
    const { nextPageUrl, nextPage } = this.props;
    nextPage(nextPageUrl);
  }

  render() {
    const { games } = this.props;
    return games.fetching ?
      <Loading name='Loading...'/> :
      <Games games={games}
             gamePagination={this.handleGamePagination}/>;
    }
  }

  const mapStateToProps = (state) => {
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

  export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
