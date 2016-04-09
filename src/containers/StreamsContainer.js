import React, { PropTypes } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetch, star } from '../actions/StreamActions';
import { STREAMS_URL } from '../endpoints/endpoints';

class StreamsContainer extends React.Component {
  static propTypes = {
    streams: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    const { streams, fetchStreams } = this.props;
    if(!streams.data) {
      fetchStreams();
    }
  }

  handleOnClick(e, id) {
    e.persist();
    const { starStream } = this.props;
    starStream(id);
  }

  render() {
    const { streams } = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams streams={streams}
               nextPageUrl={streams.nextPageUrl}
               pageCount={streams.pageCount}
               onClick={this.handleOnClick} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      streams: state.streams
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchStreams: (endpoint) => dispatch(fetch(STREAMS_URL)),
      starStream: (id) => dispatch(star(id))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
