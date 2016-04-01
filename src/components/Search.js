import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import StreamsListItem from '../components/StreamsListItem';

export default class Search extends Component {
  render() {
    const { searchResults } = this.props;
    let resultItems = searchResults.data.streams.map((stream, index) => {
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
    });

    return (
      <MainContent>
        <Heading style="searchHeader header" header="Search"/>
        <ul className="streamsList">
          {resultItems}
        </ul>
      </MainContent>
    );
  };
}

Search.propTypes = {
  searchResults: PropTypes.object.isRequired,
  game: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  views: PropTypes.number,
  followers: PropTypes.number,
  viewers: PropTypes.number
};
