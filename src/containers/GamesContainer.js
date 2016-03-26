import React, { PropTypes } from 'react';
import Games from '../components/Games';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { gamesFetchActions } from '../reducers/GamesReducer';

class GamesContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    games: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { dispatch, games } = this.props;
    if (!games.fetching && !games.data) {
      dispatch(gamesFetchActions.fetch('https://api.twitch.tv/kraken/games/top?limit=100'));
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
