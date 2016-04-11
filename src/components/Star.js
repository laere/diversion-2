import React, { Component, PropTypes } from 'react';

class Star extends React.Component {
  static propTypes = {
    starStream: PropTypes.func.isRequired
  };

  render() {
    return (
      <button className={starred ? 'starred' : 'notStarred'} onClick={(e) => onClick(e, id)}>
        <i className="fa fa-star fa-lg"></i>
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    starStream: (id) => dispatch(star(id))
  }
}

export default connect(mapDispatchToProps)(Star);
