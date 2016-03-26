import React, { PropTypes } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { streamsFetchActions } from '../reducers/StreamsReducer';

class StreamsContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    streams: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired
  };

  componentWillMount() {
  const { dispatch, streams } = this.props;
  if (!streams.data) {
    dispatch(videosFetchActions.fetch({ endpoint:'https://api.twitch.tv/kraken/streams?limit=100'}));
  }
}

  render() {
    const { streams, input } = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams streams={streams} input={input}/>;
  }
}

function mapStateToProps(state) {
  return {
    streams: state.streams,
    input: state.input
  }
}

export default connect(mapStateToProps)(StreamsContainer);
