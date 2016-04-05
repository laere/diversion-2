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
    searchStreams: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { searchChannels, searchStreams } = this.props;
    searchStreams(e.target.value);
    searchChannels(e.target.value);
  }

  // handleOnSubmit(e) {
  //   e.preventDefault();
  //   const { searchChannels, searchStreams, input } = this.props;
  //   if(input === '') return;
  //   console.log(input);
  //   searchChannels(input);
  //   searchStreams(input);
  // }

  render() {
    return (
      <Header onChange={this.handleOnChange} />
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
    // handleInput: (input) => dispatch(getInput(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
