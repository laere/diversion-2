import React, { Component, PropTypes } from 'react';
import Heading from '../components/Heading';
import MainContent from '../components/MainContent';
import FavoritesListItem from '../components/FavoritesListItem';

export default class Favorites extends Component {
  render() {
    const { starredItems, unstarClick } = this.props;
    const favoriteItems = starredItems.map(stream =>
      <FavoritesListItem
        key={'Favorites ' + stream._id}
        id={stream._id}
        stream={stream}
        unstarClick={unstarClick}
        />);

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
      unstarClick: PropTypes.func.isRequired
    };
