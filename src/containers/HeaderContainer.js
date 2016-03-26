import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import { getChannelInput } from '../reducers/InputReducer';
import { connect } from 'react-redux';
import { channelsFetchActions } from '../reducers/ChannelsReducer';

class HeaderContainer extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    channels: PropTypes.object.isRequired,
    getChannelInput: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { getChannelInput } = this.props;
    getChannelInput(e.target.value);
  }

  handleOnClick() {
    console.log('test test');
    const { getInput, input } = this.props;
    getInput(input);
  }

  render() {
    const { input } = this.props;
    return (
      <Header
        input={input}
        onChange={this.handleOnChange}
        onClick={this.handleOnClick} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      channels: state.channels,
      input: state.input
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      getChannelInput: (input) => dispatch(channelsFetchActions.fetch({endpoint: `https://api.twitch.tv/kraken/channels/${input}`}))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
