import React, { Component } from 'react';

const GamesListItem = ({ key, name, viewers, image }) => {
  return (
    <div key={key} className="contentListItem">
      <span>{name}</span>
      <div>
        <a href="#">
          <img src={image} alt="image" />
        </a>
      </div>
      <span>{viewers}</span>
    </div>
  );
};

export default GamesListItem;
