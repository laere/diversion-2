import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { channelsFetchActions } from '../reducers/ChannelsReducer';
import { searchFetchActions } from '../reducers/SearchReducer';

class HeaderContainer extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    searchChannels: PropTypes.func.isRequired,
    searchStreams: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    console.log(this);
    this.handleOnChange = debounce(this.handleOnChange, 600);
  }

  getInput(e) {
    this.handleOnChange(e.target.value)
  }

  handleOnChange(value) {
    const { searchChannels, searchStreams } = this.props;
    searchChannels(value);
    searchStreams(value);
  }

  render() {
    return (
      <Header onChange={this.getInput.bind(this)} />
    );
  }
}

function mapStateToProps(state) {
  return {
    input: state.input
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchChannels: (input) => dispatch(channelsFetchActions.fetch({endpoint: `https://api.twitch.tv/kraken/channels/${input}`})),
    searchStreams: (input) => dispatch(searchFetchActions.fetch({endpoint: `https://api.twitch.tv/kraken/search/streams?limit=100&suggest=true&live=true&q=${input}`}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
