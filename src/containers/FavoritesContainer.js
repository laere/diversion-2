import React, { PropTypes } from 'react';
import Favorites from '../components/Favorites';
import { connect } from 'react-redux';
import { unstar } from '../actions/StreamActions';

class FavoritesContainer extends React.Component {
  static propTypes = {
    starredItems: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.handleUnstarClick = this.handleUnstarClick.bind(this);
  }

  handleUnstarClick(e, id) {
    const { unstarStream } = this.props;
    unstarStream(id);
  }

  render() {
      const { starredItems } = this.props;
      return (
        <Favorites
          unstarClick={this.handleUnstarClick}
          starredItems={starredItems}/>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      starredItems: state.streams.starredItems
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      unstarStream: (id) => dispatch(unstar(id))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
