import React, { Component, PropTypes } from 'react';

const GamesListItem = ({ key, name, viewers, image }) => {
  return (
    <div key={key} className="contentListItem">
      <span>{name}</span>
      <div>
        <a href="#">
          <img src={image} alt="image" />
        </a>
      </div>
      <span>{viewers}</span>
    </div>
  );
};

GamesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  viewers: PropTypes.number.isRequired
}

export default GamesListItem;
