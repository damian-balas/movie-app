import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";

import getMovies from "../../api/getMovies";

import MovieGrid from "../../components/MovieGrid";
import Search from "../../components/Search";
import LoadingIndicator from "../../components/LoadingIndicator";
import ErrorMessage from "../../components/ErrorMessage";
class Homepage extends Component {
  state = {
    movies: [],
    query: "",
    errorMessage: ""
  };

  controller = new AbortController();
  signal = this.controller.signal;

  componentWillUnmount() {
    this.controller.abort();
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const signal = this.signal;

    try {
      const movies = await trackPromise(getMovies(this.state.query, signal));
      if (movies.Response === "False") {
        this.setState({ movies: [], errorMessage: movies.Error });
      } else {
        this.setState({ movies: movies.Search, errorMessage: "" });

      }
    } catch (error) {
      this.setState({ movies: [], errorMessage: error.message });
      

    }
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { handleFavButtonClicked, favs } = this.props;
    const { movies, errorMessage } = this.state;

    return (
      <Fragment>
        <Search handleChange={handleChange} handleSubmit={handleSubmit} />
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        <LoadingIndicator />
        <MovieGrid
          loadingIndicatorOff={true}
          favs={favs}
          handleFavButtonClicked={handleFavButtonClicked}
          movies={movies}
        />
      </Fragment>
    );
  }
}

export default Homepage;
