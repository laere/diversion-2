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
      <span>{viewers} viewers</span>
    </div>
  );
};

GamesListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  viewers: PropTypes.number
}

export default GamesListItem;
