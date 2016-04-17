import React, { Component, PropTypes } from 'react';
import Heading from '../components/Heading';
import MainContent from '../components/MainContent';
import FavoritesListItem from '../components/FavoritesListItem';

export default class Favorites extends Component {
  render() {
    const { starredItems, unstarClick } = this.props;
    const favoriteItems = starredItems.map(stream => {
      return (
        <FavoritesListItem
          key={'Favorites ' + stream._id}
          id={stream._id}
          game={stream.channel.game}
          image={stream.preview.medium}
          url={stream.channel.url}
          name={stream.channel.display_name}
          viewers={stream.viewers}
          views={stream.channel.views}
          unstarClick={unstarClick}
        />
      );
    })
    return (
      <MainContent>
        <Heading style="streamsHeader header" header="Favorites"/>
          <ul className="streamsList">
            {favoriteItems}
          </ul>
      </MainContent>
    );
  }
}

Favorites.propTypes = {
  starredItems: PropTypes.array.isRequired,
  key: PropTypes.string,
  id: PropTypes.string,
  game: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  views: PropTypes.number,
  viewers: PropTypes.number
};
