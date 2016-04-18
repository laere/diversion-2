import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import StreamsListItem from '../components/StreamsListItem';

export default class Streams extends Component {
  render() {
    const { streams, starClick, unstarClick } = this.props;
    const streamItems = streams.data.map(stream =>
      <StreamsListItem
        key={'Streams ' + stream._id}
        id={stream._id}
        stream={stream}
        starClick={starClick}
        unstarClick={unstarClick}
        />);

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

    StreamsListItem.propTypes = {
      starClick: PropTypes.func.isRequired,
      unstarClick: PropTypes.func.isRequired,
      stream: PropTypes.object.isRequired
    };
