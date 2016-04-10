import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import GamesListItem from '../components/GamesListItem';

export default class Games extends Component {
  render() {
    const { games } = this.props;
    let gamesItems = games.data.top.map(game => {
      return (
        <GamesListItem
          key={game.game._id}
          name={game.game.name}
          viewers={game.viewers}
          image={game.game.box.large}
          />
      );
    });

    return (
      <MainContent>
        <Heading style="gamesHeader header" header="Games"/>
        <ul className="gamesList">
          {gamesItems}
        </ul>
        <button onClick={this.props.gamePagination}>Next</button>
      </MainContent>
    );
  }
}

Games.propTypes = {
  games: PropTypes.object.isRequired,
  key: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  viewers: PropTypes.number
};
