import React, { Component } from 'react';

const StreamsListItem = ({ id, game, name, url, image, views, viewers, onClick, starred }) => {
  return (
    <div className="contentListItem">
      <span>{game}</span>
      <div>
        <a href={url} target="_blank">
          <img src={image}/>
        </a>
      </div>
      <div>
        <span>{viewers} viewers on <strong>{name}</strong></span>
        <button className={starred ? 'starred' : 'notStarred'} onClick={(e) => onClick(e, id)}>
          <i className="fa fa-star fa-lg"></i>
        </button>
      </div>
    </div>
  );
}

StreamsListItem.propTypes = {
  onClick: React.PropTypes.func,
  game: React.PropTypes.string,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  image: React.PropTypes.string,
  views: React.PropTypes.number,
  viewers: React.PropTypes.number
};

export default StreamsListItem;
