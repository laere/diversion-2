import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { channelsFetchActions } from '../reducers/ChannelsReducer';
import { searchFetchActions } from '../reducers/SearchReducer';

class HeaderContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    searchChannels: PropTypes.func.isRequired,
    searchStreams: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    console.log(this);
    this.handleOnChange = debounce(this.handleOnChange, 600);
    this.getInput = this.getInput.bind(this);
  }

  getInput(e) {
    this.handleOnChange(e.target.value)
  }

  handleOnChange(value) {
    const { searchChannels, searchStreams, dispatch } = this.props;
    dispatch(searchChannels(value));
    dispatch(searchStreams(value));
  }

  render() {
    return (
      <Header onChange={this.getInput} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchChannels: (input) => channelsFetchActions.fetch({endpoint: `https://api.twitch.tv/kraken/channels/${input}`}),
    searchStreams: (input) => searchFetchActions.fetch({endpoint: `https://api.twitch.tv/kraken/search/streams?limit=100&suggest=true&live=true&q=${input}`})
  }
}

export default connect(mapDispatchToProps)(HeaderContainer);
