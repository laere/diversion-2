import React, { PropTypes } from 'react';
import Search from '../components/Search';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { searchFetchActions } from '../reducers/SearchReducer';

class SearchContainer extends React.Component {
  static propTypes = {
    searchResults: PropTypes.string.isRequired
  };

  render() {
    const { searchResults } = this.props;
    return !searchResults.data ?
      <Loading name="Search for games, streams, and channels!" /> :
      <Search searchResults={searchResults}/>
    }
  }

  function mapStateToProps(state) {
    return {
      searchResults: state.searchResults
    }
  }

  export default connect(mapStateToProps)(SearchContainer);
