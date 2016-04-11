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
      starStream: (id) => dispatch(star(id))
    }
  }

  export default connect(mapDispatchToProps)(StarContainer);
