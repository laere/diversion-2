import React, { Component } from 'react';

const StreamsListItem = ({ key, game, name, url, image, views, viewers }) => {
  return (
    <div key={key} className="contentListItem">
      <span>{game}</span>
      <div>
        <a href={url} target="_blank">
          <img src={image}/>
        </a>
      </div>
      <div>
        <span>{viewers} viewers on <strong>{name}</strong></span>
      </div>
    </div>
  );
}

StreamsListItem.propTypes = {
  game: React.PropTypes.string,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  image: React.PropTypes.string,
  views: React.PropTypes.number,
  viewers: React.PropTypes.number
};

export default StreamsListItem;
