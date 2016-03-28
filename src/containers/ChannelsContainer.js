import React, { PropTypes } from 'react';
import Channels from '../components/Channels';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { channelsFetchActions } from '../reducers/ChannelsReducer';

class ChannelsContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    channels: PropTypes.object.isRequired
  };

  // componentWillMount() {
  //   const { dispatch, channels } = this.props;
  //   if (!channels.data) {
  //     dispatch(channelsFetchActions.fetch({endpoint: 'https://api.twitch.tv/kraken/channels/imaqtpie'}));
  //   }
  // }

  render() {
    const { channels } = this.props;
    return !channels.data ?
      <Loading name='Loading...'/> :
      <Channels channels={channels} />;
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    input: state.input
  }
}

export default connect(mapStateToProps)(ChannelsContainer);
