import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import VideosListItem from '../components/VideosListItem';

export default class Videos extends Component {
  render() {
    const { videos } = this.props;
    const videosItems = videos.data.map(video => {
      const shortenTitle = video.title.slice(0, 30) + '...';
      const newTitle = video.title.length > 30 ? shortenTitle : video.title;
      return (
        <VideosListItem
          key={video._id}
          newTitle={newTitle}
          video={video}
        />
      );
    });

    return (
      <MainContent>
        <Heading style="videosHeader header" header="Videos"/>
        <ul className="videosList">
          {videosItems}
        </ul>
      </MainContent>
    );
  }
};

Videos.propTypes = {
  videos: PropTypes.object.isRequired,
  newTitle: PropTypes.string,
};
