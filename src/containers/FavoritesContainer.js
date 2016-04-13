import React, { PropTypes } from 'react';
import Favorites from '../components/Favorites';
import { connect } from 'react-redux';
import { starredItems } from '../selectors/selectors';

class FavoritesContainer extends React.Component {
  static propTypes = {
    starredItems: PropTypes.array
  };

  componentDidMount() {
    const { starredItems } = this.props;
    JSON.parse(localStorage.getItem(starredItems));
  }

  render() {
      const { starredItems } = this.props;
      return (
        <Favorites starredItems={starredItems}/>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      starredItems: starredItems(state)
    }
  }

  export default connect(mapStateToProps)(FavoritesContainer);
