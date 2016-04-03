import React, { PropTypes } from 'react';
import Channels from '../components/Channels';
import Loading from '../components/Loading';
import { connect } from 'react-redux';

class ChannelsContainer extends React.Component {
  static propTypes = {
    channels: PropTypes.object.isRequired
  };

  render() {
    const { channels } = this.props;
    return !channels.data ?
      <Loading name='Search for your favorite channel!'/> :
      <Channels channels={channels} />;
    }
  }

  function mapStateToProps(state) {
    return {
      channels: state.channels
    }
  }

  export default connect(mapStateToProps)(ChannelsContainer);
