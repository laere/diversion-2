import React, { PropTypes } from 'react';

const Loading = (props) => {
  return (
    <div className="loading">
      <h1>{props.name}</h1>
    </div>
  );
};

Loading.propTypes = {
  name: PropTypes.string
}

export default Loading;
