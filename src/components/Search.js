import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import StreamsListItem from '../components/StreamsListItem';

export default class Search extends Component {
  render() {
    const { searchResults } = this.props;
    const resultItems = searchResults.data.streams.map(stream =>
      <StreamsListItem
        key={'Search ' + stream._id}
        id={stream._id}
        stream={stream}
        />);

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
    };
