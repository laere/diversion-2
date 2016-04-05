import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { getInput } from '../reducers/InputReducer';
import { channelsFetchActions } from '../reducers/ChannelsReducer';
import { searchFetchActions } from '../reducers/SearchReducer';

class HeaderContainer extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    searchChannels: PropTypes.func.isRequired,
    searchStreams: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { handleInput } = this.props;
    handleInput(e.target.value);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { searchChannels, searchStreams, input } = this.props;
    searchChannels(input);
    searchStreams(input);
  }

  render() {
    const { input } = this.props;
    return (
      <Header
        input={input}
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange} />
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    input: state.input
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchChannels: (input) => dispatch(channelsFetchActions.fetch({endpoint: `https://api.twitch.tv/kraken/channels/${input}`})),
    searchStreams: (input) => dispatch(searchFetchActions.fetch({endpoint: `https://api.twitch.tv/kraken/search/streams?limit=100&suggest=true&live=true&q=${input}`})),
    handleInput: (input) => dispatch(getInput(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
