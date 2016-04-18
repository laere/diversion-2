import React, { Component, PropTypes } from 'react';
import LazyLoad from 'react-lazyload';

const VideosListItem = ({ video, newTitle }) => {
  return (
    <LazyLoad height={400} once={true} scroll={true}>
      <div className="contentListItem">
        <span>{newTitle}</span>
        <div>
          <div className="imagePlaceholder">
            <a href={video.url} target="_blank">
              <img src={video.preview} alt="image" />
            </a>
          </div>
        </div>
        <span>{video.channel.display_name}</span>
        <span className="contentListItemFloatLeft">{video.views}</span>
      </div>
    </LazyLoad>
  );
}

VideosListItem.propTypes = {
  video: PropTypes.object.isRequired,
  newTitle: PropTypes.string
};

export default VideosListItem
