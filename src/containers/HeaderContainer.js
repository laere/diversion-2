import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { fetchChannel } from '../actions/ChannelActions';
import { fetchSearchResults } from '../actions/SearchActions';


class HeaderContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    searchChannels: PropTypes.func.isRequired,
    searchStreams: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleOnChange = debounce(this.handleOnChange, 600);
    this.getInput = this.getInput.bind(this);
  }

  getInput(e) {
    this.handleOnChange(e.target.value)
    console.log(e.target.value);
  }

  handleOnChange(input) {
    const { searchChannels, searchStreams, dispatch } = this.props;
      dispatch(searchChannels(input));
      dispatch(searchStreams(input));
  }

  render() {
    return (
      <Header onChange={this.getInput} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchChannels: (input) => fetchChannel({endpoint: `https://api.twitch.tv/kraken/channels/${input}`}),
    searchStreams: (input) => fetchSearchResults({endpoint: `https://api.twitch.tv/kraken/search/streams?limit=100&suggest=true&live=true&q=${input}`})
  }
}

export default connect(mapDispatchToProps)(HeaderContainer);
