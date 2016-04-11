import React, { Component } from 'react';
import { Lazy } from 'react-lazy';

const VideosListItem = ({ name, title, link, image, views }) => {
  return (
    <Lazy nodeName="div">
      <div className="contentListItem">
        <span>{title}</span>
        <div>
          <a href={link} target="_blank">
            <img src={image} alt="image" />
          </a>
        </div>
        <span>{name}</span>
        <span className="contentListItemFloatLeft">{views}</span>
      </div>
    </Lazy>
  );
}

VideosListItem.propTypes = {
  game: React.PropTypes.string,
  name: React.PropTypes.string,
  link: React.PropTypes.string,
  image: React.PropTypes.string
};

export default VideosListItem
