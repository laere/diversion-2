import React, { Component, PropTypes } from 'react';

const StreamsListItem = ({ stream, id, unstarClick, starClick }) => {
  return (
    <div className="contentListItem">
      <span>{stream.channel.game}</span>
      <div className="imagePlaceholder">
        <a href={stream.channel.url} target="_blank">
          <img src={stream.preview.medium}/>
        </a>
      </div>
      <div>
        <span>{stream.viewers} viewers on <strong>{stream.channel.display_name}</strong></span>
        <button
          className={stream.starred ? 'starred' : 'notStarred'}
          onClick={stream.starred ? (e) => unstarClick(e, id) : (e) => starClick(e, id)}>
          <i className="fa fa-star fa-lg"></i>
        </button>
      </div>
    </div>
  );
}

StreamsListItem.propTypes = {
  starClick: PropTypes.func.isRequired,
  unstarClick: PropTypes.func.isRequired,
  stream: PropTypes.object.isRequired,
  id: PropTypes.number
};

export default StreamsListItem;
