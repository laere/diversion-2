import React, { Component } from 'react';

const List = ({ streams }) => {
  return (
    <div className="placeholder">
      <ul>
        {streams.map((stream.inde) {
          return (
            <li key={index}>
              {stream.game}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
