import React, { Component } from 'react';
import './Searchbar.scss';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInput = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
  };

  render() {
    const { value } = this.state;
    const { handleInput, handleSubmit } = this;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={handleInput}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
