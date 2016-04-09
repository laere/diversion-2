import React, { Component } from 'react';

const VideosListItem = ({ name, title, link, image, views }) => {
  return (
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
  );
}

VideosListItem.propTypes = {
  game: React.PropTypes.string,
  name: React.PropTypes.string,
  link: React.PropTypes.string,
  image: React.PropTypes.string
};

export default VideosListItem
