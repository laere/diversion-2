import React, { PropTypes } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { streamsFetchActions } from '../reducers/StreamsReducer';
import { STREAMS_URL } from '../endpoints/endpoints';

class StreamsContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    streams: PropTypes.object.isRequired
  };

  componentWillMount() {
  const { dispatch, streams } = this.props;
  if (!streams.data) {
    dispatch(streamsFetchActions.fetch(STREAMS_URL));
  }
}

  render() {
    const { streams, input } = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams streams={streams}/>;
  }
}

function mapStateToProps(state) {
  return {
    streams: state.streams
  }
}

export default connect(mapStateToProps)(StreamsContainer);
