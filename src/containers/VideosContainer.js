import React, { PropTypes } from 'react';
import Videos from '../components/Videos';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { videosFetchActions } from '../reducers/VideosReducer';

class VideosContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    videos: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { dispatch, videos } = this.props;
    if (!videos.fetching && !videos.data) {
      dispatch(videosFetchActions.fetch('https://api.twitch.tv/kraken/videos/top?limit=100'));
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
