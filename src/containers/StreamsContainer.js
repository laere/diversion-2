import React, { PropTypes } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { starAnItem } from '../reducers/StarReducer';
import { streamsFetchActions } from '../reducers/StreamsReducer';
import { STREAMS_URL } from '../endpoints/endpoints';

class StreamsContainer extends React.Component {
  static propTypes = {
    streams: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { streams, fetchStreams } = this.props;
    if (!streams.data) {
      fetchStreams();
    }
  }

  handleOnClick() {
    const { star } = this.props;
    star();
  }

  render() {
    const { streams, isStarred } = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams streams={streams}
               isStarred={isStarred}
               onClick={this.handleOnClick.bind(this)} />;
    }
  }

  function mapStateToProps(state) {
    return {
      streams: state.streams,
      isStarred: state.star.isStarred
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      star: () => dispatch(starAnItem()),
      fetchStreams: () => dispatch(streamsFetchActions.fetch(STREAMS_URL))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
