import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import GamesListItem from '../components/GamesListItem';

export default class Games extends Component {

  render() {
    const { games } = this.props;
    const gamesData = games.data.top;
    let gamesItems = games.data.top.map((game, index) => {
      return (
        <GamesListItem
          key={index}
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
      </MainContent>
    );
  }
}
