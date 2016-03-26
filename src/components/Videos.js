import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import VideosListItem from '../components/VideosListItem';

export default class Videos extends Component {

  render() {
    const { videos } = this.props;
    const videosData = videos.data.videos;
    let videosItems = videosData.map((video, index) => {
      let shortenTitle = video.title.slice(0, 30) + '...';
      let newTitle = video.title.length > 30 ? shortenTitle : video.title;
      return (
        <VideosListItem
          key={index}
          title={newTitle}
          link={video.url}
          image={video.preview}
          name={video.channel.display_name}
          views={video.views}
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
