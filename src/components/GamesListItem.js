import React, { Component, PropTypes } from 'react';

const GamesListItem = ({ name, viewers, image, starred }) => {
  return (
    <div className="contentListItem">
      <span>{name}</span>
      <div>
        <a href="#">
          <img src={image} alt="image" />
        </a>
      </div>
      <span>{viewers} viewers</span>
    </div>
  );
};

GamesListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  viewers: PropTypes.number,
  starred: PropTypes.boolean
}

export default GamesListItem;
