import React, { Component, PropTypes } from 'react';
import LazyLoad from 'react-lazyload';

const GamesListItem = ({ game }) => {
  return (
    <LazyLoad height={500} once={true} scroll={true}>
      <div className="contentListItem">
        <span>{game.game.name}</span>
        <div>
          <a href="#">
            <img src={game.game.box.large} alt="image" />
          </a>
        </div>
        <span>{game.viewers} viewers</span>
      </div>
    </LazyLoad>
  );
};

GamesListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  viewers: PropTypes.number
}

export default GamesListItem;
