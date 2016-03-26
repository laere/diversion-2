import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import StreamsListItem from '../components/StreamsListItem';

export default class Streams extends Component {

  render() {
    const { streams, input } = this.props;
    const streamsData = streams.data.streams;

    // let streamItems = streamsData.filter(stream => {
    //   console.log(input);
    //   return stream.channel.game.toLowerCase().indexOf(input);
    // });

    let streamItems = streamsData.map((stream, index) => {
      return (
        <StreamsListItem
          key={index}
          game={stream.channel.game}
          image={stream.preview.medium}
          url={stream.channel.url}
          name={stream.channel.display_name}
          viewers={stream.viewers}
          followers={stream.channel.followers}
          views={stream.channel.views}
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
  streams: React.PropTypes.object,
  game: React.PropTypes.string,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  image: React.PropTypes.string,
  views: React.PropTypes.number,
  followers: React.PropTypes.number,
  viewers: React.PropTypes.number
};
