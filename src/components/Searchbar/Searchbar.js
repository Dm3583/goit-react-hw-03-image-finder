import React, { Component } from 'react';
import './Searchbar.scss';
import SearchForm from './SearchForm';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
};

export default Searchbar;
