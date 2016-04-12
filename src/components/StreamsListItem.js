import React, { Component, PropTypes } from 'react';

const StreamsListItem = ({ id, game, name, url, image, views, viewers, starClick, unstarClick, starred }) => {
  return (
    <div className="contentListItem">
      <span>{game}</span>
      <div className="imagePlaceholder">
        <a href={url} target="_blank">
          <img src={image}/>
        </a>
      </div>
      <div>
        <span>{viewers} viewers on <strong>{name}</strong></span>
        <button
          className={starred ? 'starred' : 'notStarred'}
          onClick={starred ? (e) => unstarClick(e, id) : (e) => starClick(e, id)}>
          <i className="fa fa-star fa-lg"></i>
        </button>
      </div>
    </div>
  );
}

StreamsListItem.propTypes = {
  starClick: PropTypes.func.isRequired,
  unstarClick: PropTypes.func.isRequired,
  game: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  views: PropTypes.number,
  viewers: PropTypes.number
};

export default StreamsListItem;
