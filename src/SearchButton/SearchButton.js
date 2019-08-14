import React from 'react';
import './SearchButton.scss';

const SearchButton = ({ onClick }) => {
  return (
    <button className="searchBtn" onClick={onClick}>Search</button>
  );
};

export default SearchButton;