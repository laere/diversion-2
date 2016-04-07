import React, { Component } from 'react';

const StreamsListItem = ({ key, game, name, url, image, views, viewers, onClick, isStarred }) => {
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
        <button className={isStarred ? 'starred' : 'notStarred'} onClick={onClick}>
          <i className="fa fa-star fa-lg"></i>
        </button>
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
  viewers: React.PropTypes.number,
  isStarred: React.PropTypes.boolean,
  onClick: React.PropTypes.func.isRequired
};

export default StreamsListItem;
