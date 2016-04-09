import React, { PropTypes } from 'react';
import Videos from '../components/Videos';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetch } from '../actions/VideoActions';
import { VIDEOS_URL } from '../endpoints/endpoints';

class VideosContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    videos: PropTypes.object.isRequired
  };

  componentWillMount() {
  const { dispatch, videos } = this.props;
  if (!videos.data) {
    dispatch(fetch(VIDEOS_URL));
  }
}

  render() {
    const { videos } = this.props;
    return videos.fetching ?
      <Loading header="Loading..." /> :
      <Videos videos={videos} />;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps)(VideosContainer);
