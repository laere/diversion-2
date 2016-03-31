import React, { Component } from 'react';

const SearchResultItem = ({ key, game }) => {
  return (
    <div key={key} className="contentListItem">
      <span>{game}</span>
    </div>
  )
};

export default SearchResultItem;
