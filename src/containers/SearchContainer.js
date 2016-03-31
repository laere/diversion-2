import React, { PropTypes } from 'react';
import Search from '../components/Search';
import Loading from '../components/Loading';
import { connect } from 'react-redux';

class SearchContainer extends React.Component {
  static propTypes = {
    searchResults: PropTypes.object.isRequired
  };

  render() {
    const { searchResults } = this.props;
    return !searchResults.data ?
      <Loading name='Search for your favorite streams!'/> :
      <Search searchResults={searchResults} />;
    }
  }

  function mapStateToProps(state) {
    return {
      searchResults: state.searchResults
    }
  }

  export default connect(mapStateToProps)(SearchContainer);
