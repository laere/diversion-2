import React, { PropTypes } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetch, star, unStar, streamPagination } from '../actions/StreamActions';
import { STREAMS_URL } from '../endpoints/endpoints';

class StreamsContainer extends React.Component {
  static propTypes = {
    streams: PropTypes.object.isRequired,
    nextPageUrl: PropTypes.string,
    fetchStreams: PropTypes.func.isRequired,
    starStream: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    unStarStream: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handleUnstarClick = this.handleUnstarClick.bind(this);
  }

  componentDidMount() {
    const { streams, fetchStreams } = this.props;
    if(!streams.data) {
      fetchStreams();
    }
  }

  handleStarClick(id) {
    const { starStream } = this.props;
    starStream(id);
  }

  handleUnstarClick(id) {
    const { unStarStream } = this.props;
    unStarStream(id);
  }

  handleNextPageClick(e) {
    const { nextPage, nextPageUrl } = this.props;
    nextPage(nextPageUrl);
  }

  render() {
    const { streams, nextPage } = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams
        streams={streams}
        nextPage={this.handleNextPageClick}
        unstarClick={this.handleUnstarClick}
        starClick={this.handleStarClick}
      />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      streams: state.streams,
      nextPageUrl: state.streams.nextPageUrl
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchStreams: (endpoint) => dispatch(fetch(STREAMS_URL)),
      starStream: (id) => dispatch(star(id)),
      unStarStream: (id) => dispatch(unStar(id)),
      nextPage: (nextPageUrl) => dispatch(streamPagination(nextPageUrl))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
