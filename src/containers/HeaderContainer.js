import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import { getChannelInput, getStreamsSearchResults } from '../reducers/InputReducer';
import { connect } from 'react-redux';
import { channelsFetchActions } from '../reducers/ChannelsReducer';
import { searchFetchActions } from '../reducers/SearchReducer';
import { actions } from '../reducers/InputReducer';
import Loading from '../components/Loading';

class HeaderContainer extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    getChannelInput: PropTypes.func.isRequired,
    getStreamsSearchResults: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { getStreamsSearchResults, getChannelInput } = this.props;
    getStreamsSearchResults(e.target.value);
    getChannelInput(e.target.value);
  }

  render() {
    const { input } = this.props;
    return (
      <Header
        input={input}
        onChange={this.handleOnChange} />
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
      getChannelInput: (input) => dispatch(channelsFetchActions.fetch({endpoint: `https://api.twitch.tv/kraken/channels/${input}`})),
      getStreamsSearchResults: (input) => dispatch(searchFetchActions.fetch( {endpoint: `https://api.twitch.tv/kraken/search/streams?q=${input}`} ))
      // getGamesSearchResults: (input) => dispatch(searchFetchActions.fetch( {endpoint: `https://api.twitch.tv/kraken/search/games?q=${input}`} ))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
