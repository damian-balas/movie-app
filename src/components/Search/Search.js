import React from "react";

import "./Search.sass";

const Search = ({ handleChange, handleSubmit }) => (
  <form autoComplete="off" className="form">
    <label className="label" htmlFor="query">
      Search Movie:
    </label>
    <input
      placeholder="Search for movies..."
      className="search-input"
      onChange={handleChange}
      type="text"
      name="query"
      id="query"
    />
    <button className="submit-btn" onClick={handleSubmit} type="submit">
      <span aria-hidden="true" className="fas fa-search"></span>
    </button>
  </form>
);

export default Search;
