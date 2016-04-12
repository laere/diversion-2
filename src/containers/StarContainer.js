import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Star from '../components/Star';

class StarContainer extends React.Component {
  static propTypes = {
    starStream: PropTyps.func.isRequired
  };

  render() {
    return (
      <Star />
    );
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchStreams: (endpoint) => dispatch(fetch(STREAMS_URL)),
    }
  }

  export default connect(mapDispatchToProps)(StarContainer);
