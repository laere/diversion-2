import React, { Component, PropTypes } from 'react';
import Star from '../components/Star';
import { connect } from 'react-redux';
import { starAnItem } from '../reducers/StarReducer';

class StarContainer extends Component {
  // static PropTypes = {
  //   isStarred: PropTypes.boolean.isRequired,
  //   starredItem: PropTypes.func.isRequired
  // };

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { starredItem } = this.props;
    starredItem();
  }

  render() {
    const { isStarred } = this.props;
    <Star isStarred={isStarred} onClick={this.handleOnClick} />
  }
}

const mapStateToProps = (state) => {
  return {
    isStarred: state.isStarred,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    starredItem: () => dispatch(starAnItem())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarContainer);
