import React, { Component, PropTypes } from 'react';
import { Lazy } from 'react-lazy';

const GamesListItem = ({ name, viewers, image }) => {
  return (
    <Lazy nodeName="div">
      <div className="contentListItem">
        <span>{name}</span>
        <div>
          <a href="#">
            <img src={image} alt="image" />
          </a>
        </div>
        <span>{viewers} viewers</span>
      </div>
    </Lazy>
  );
};

GamesListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  viewers: PropTypes.number
}

export default GamesListItem;
