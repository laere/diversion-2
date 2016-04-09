import React, { PropTypes } from 'react';
import Games from '../components/Games';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetch } from '../actions/GameActions';
import { GAMES_URL } from '../endpoints/endpoints';

class GamesContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    games: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { games, dispatch } = this.props;
    if (!games.data) {
      dispatch(fetch(GAMES_URL))
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
      games: state.games
    }
  }

  export default connect(mapStateToProps)(GamesContainer);
