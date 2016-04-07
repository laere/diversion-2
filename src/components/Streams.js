import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import StreamsListItem from '../components/StreamsListItem';

export default class Streams extends Component {
  render() {
    const { streams, onClick, isStarred } = this.props;
    const streamsData = streams.data.streams;
    let streamItems = streamsData.map((stream) => {
      return (
        <StreamsListItem
          key={stream._id}
          game={stream.channel.game}
          image={stream.preview.medium}
          url={stream.channel.url}
          name={stream.channel.display_name}
          viewers={stream.viewers}
          views={stream.channel.views}
          onClick={onClick}
          isStarred={isStarred}
          />
      );
    })

    return (
      <MainContent>
        <Heading style="streamsHeader header" header="Streams"/>
        <ul className="streamsList">
          {streamItems}
        </ul>
      </MainContent>
    );
  }
};

Streams.propTypes = {
  streams: PropTypes.object.isRequired,
  key: PropTypes.string,
  game: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  views: PropTypes.number,
  viewers: PropTypes.number
};
