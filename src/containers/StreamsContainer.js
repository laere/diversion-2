import React, { PropTypes } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetch, star, unstar, streamPagination } from '../actions/StreamActions';
import { STREAMS_URL } from '../endpoints/endpoints';

class StreamsContainer extends React.Component {
  static propTypes = {
    streams: PropTypes.object.isRequired,
    nextPageUrl: PropTypes.string,
    prevPageUrl: PropTypes.string,
    starredItems: PropTypes.array,
    fetchStreams: PropTypes.func.isRequired,
    starStream: PropTypes.func.isRequired,
    unstarStream: PropTypes.func.isRequired,
    paginate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handleUnstarClick = this.handleUnstarClick.bind(this);
    this.handlePrevPageClick = this.handlePrevPageClick.bind(this);
  }

  componentDidMount() {
    const { streams, fetchStreams } = this.props;
    if(!streams.data) {
      fetchStreams();
    }
  }

  handleStarClick(e, id) {
    const { starStream } = this.props;
    starStream(id);
  }

  handleUnstarClick(e, id) {
    const { unstarStream } = this.props;
    unstarStream(id);
  }

  handleNextPageClick(e) {
    const { paginate, nextPageUrl } = this.props;
    paginate(nextPageUrl);
  }

  handlePrevPageClick(e) {
    const { paginate, prevPageUrl } = this.props;
    paginate(prevPageUrl);
  }

  render() {
    const { streams } = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams
        streams={streams}
        prevPage={this.handlePrevPageClick}
        nextPage={this.handleNextPageClick}
        unstarClick={this.handleUnstarClick}
        starClick={this.handleStarClick}
      />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      streams: state.streams,
      nextPageUrl: state.streams.nextPageUrl,
      prevPageUrl: state.streams.prevPageUrl
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchStreams: (endpoint) => dispatch(fetch(STREAMS_URL)),
      starStream: (id) => dispatch(star(id)),
      unstarStream: (id) => dispatch(unstar(id)),
      paginate: (url) => dispatch(streamPagination(url))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
