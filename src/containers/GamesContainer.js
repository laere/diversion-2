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
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePrevPageClick = this.handlePrevPageClick.bind(this);
  }

  componentDidMount() {
    const { games, fetchGames } = this.props;
    if (!games.data) {
      fetchGames();
    }
  }

  handleNextPageClick(e) {
    const { nextPageUrl, paginate } = this.props;
    paginate(nextPageUrl);
  }

  handlePrevPageClick(e) {
    const { prevPageUrl, paginate } = this.props;
    paginate(prevPageUrl);
  }

  render() {
    const { games } = this.props;
    return games.fetching ?
      <Loading name='Loading...'/> :
      <Games games={games}
             prevPage={this.handlePrevPageClick}
             nextPage={this.handleNextPageClick}/>;
    }
  }

  const mapStateToProps = (state) => {
    return {
      games: state.games,
      nextPageUrl: state.games.nextPageUrl,
      prevPageUrl: state.games.prevPageUrl
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchGames: (endpoint) => dispatch(fetch(GAMES_URL)),
      paginate: (url) => dispatch(gamePagination(url))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
