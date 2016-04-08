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

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillMount() {
    const { streams, fetchStreams } = this.props;
    if (!streams.data) {
      fetchStreams();
    }
  }

  handleOnClick(e, id) {
    e.persist();
    const { starAnItem } = this.props;
    starAnItem(id);
  }

  render() {
    const { streams } = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams streams={streams}
               onClick={this.handleOnClick} />;
    }
  }

  function mapStateToProps(state) {
    return {
      streams: state.streams
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      starAnItem: (id) => dispatch(streamsFetchActions.starItem(id)),
      fetchStreams: (endpoint) => dispatch(streamsFetchActions.fetch(STREAMS_URL))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
