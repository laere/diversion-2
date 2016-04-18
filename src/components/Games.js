import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import GamesListItem from '../components/GamesListItem';

export default class Games extends Component {
  render() {
    const { games } = this.props;
    const gamesItems = games.data.map(game =>
      <GamesListItem
        key={game.game._id}
        game={game}
        />);

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
    };
