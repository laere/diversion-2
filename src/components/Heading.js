import React, { PropTypes } from 'react';

const Heading = (props) => {
  return (
    <div className={props.style}>
      <h3>{props.header}</h3>
    </div>
  );
};

Heading.propTypes = {
  style: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired
}

export default Heading;
