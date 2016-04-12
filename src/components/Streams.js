import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import StreamsListItem from '../components/StreamsListItem';

export default class Streams extends Component {
  render() {
    const { streams, starClick, unstarClick } = this.props;
    let streamItems = streams.data.map(stream => {
      return (
        <StreamsListItem
          key={stream._id}
          id={stream._id}
          game={stream.channel.game}
          image={stream.preview.medium}
          url={stream.channel.url}
          name={stream.channel.display_name}
          viewers={stream.viewers}
          views={stream.channel.views}
          starClick={starClick}
          unstarClick={unstarClick}
          starred={stream.starred}
        />
      );
    })

    return (
      <MainContent>
        <Heading style="streamsHeader header" header="Streams"/>
        <div>
          <input type="submit" className="pageBtn" onClick={this.props.prevPage} value="Back" />
          <input type="submit" className="pageBtn" onClick={this.props.nextPage} value="Next" />
        </div>
        <ul className="streamsList">
          {streamItems}
        </ul>
      </MainContent>
    );
  }
};

Streams.propTypes = {
  streams: PropTypes.object.isRequired,
  starClick: PropTypes.func.isRequired,
  unstarClick: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  key: PropTypes.string,
  id: PropTypes.string,
  game: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  views: PropTypes.number,
  viewers: PropTypes.number
};
