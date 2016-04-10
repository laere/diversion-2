import React, { PropTypes } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetch, star, streamPagination, featuredStreams } from '../actions/StreamActions';
import { STREAMS_URL } from '../endpoints/endpoints';

class StreamsContainer extends React.Component {
  static propTypes = {
    streams: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handleFeaturedStreamsClick = this.handleFeaturedStreamsClick.bind(this);
  }

  componentDidMount() {
    const { streams, fetchStreams } = this.props;
    if(!streams.data) {
      fetchStreams();
    }
  }

  handleStarClick(e, id) {
    e.persist();
    const { starStream } = this.props;
    starStream(id);
  }

  handleNextPageClick(e) {
    e.persist();
    const { nextPage, nextPageUrl } = this.props;
    nextPage(nextPageUrl);
  }

  handleFeaturedStreamsClick(e) {
    e.persist();
    const { featuredStreamsUrl, featured } = this.props;
    featured(featuredStreamsUrl);
  }

  render() {
    const { streams, nextPage, featured} = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams streams={streams}
               featured={this.handleFeaturedStreamsClick}
               nextPage={this.handleNextPageClick}
               onClick={this.handleStarClick} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      streams: state.streams,
      nextPageUrl: state.streams.nextPageUrl,
      featuredStreamsUrl: state.streams.featuredStreams
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchStreams: (endpoint) => dispatch(fetch(STREAMS_URL)),
      starStream: (id) => dispatch(star(id)),
      nextPage: (nextPageUrl) => dispatch(streamPagination(nextPageUrl)),
      featured: (featuredStreamsUrl) => dispatch(featuredStreams(featuredStreamsUrl))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
