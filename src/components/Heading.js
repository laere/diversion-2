import React from 'react';

const Heading = (props) => {
  return (
    <div className={props.style}>
      <h3>{props.header}</h3>
    </div>
  );
};

export default Heading;
