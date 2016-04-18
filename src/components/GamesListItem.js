import React, { Component, PropTypes } from 'react';

const GamesListItem = ({ game }) => {
  return (
    <div className="contentListItem">
      <span>{game.game.name}</span>
      <div>
        <a href="#">
          <img src={game.game.box.large} alt="image" />
        </a>
      </div>
      <span>{game.viewers} viewers</span>
    </div>
  );
};

GamesListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  viewers: PropTypes.number
}

export default GamesListItem;
