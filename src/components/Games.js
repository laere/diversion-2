import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import GamesListItem from '../components/GamesListItem';

export default class Games extends Component {
  render() {
    const { games } = this.props;
    let gamesItems = games.data.map(game => {
      return (
        <GamesListItem
          key={game.game._id}
          name={game.game.name}
          viewers={game.viewers}
          image={game.game.box.large}
          starred={game.starred}
        />
      );
    });

    return (
      <MainContent>
        <Heading style="gamesHeader header" header="Games"/>
        <input type="submit" value="Back" className="pageBtn" onClick={this.props.prevPage}/>
        <input type="submit" value="Next" className="pageBtn" onClick={this.props.nextPage}/>
        <ul className="gamesList">
          {gamesItems}
        </ul>
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
