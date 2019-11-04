import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";

import getMovie from "../../api/getMovie";

import ErrorMessage from "../../components/ErrorMessage";
import MovieGrid from "../../components/MovieGrid";

class Favspage extends Component {
  state = {
    movies: [],
    errorMessage: ""
  };
  controller = new AbortController();
  signal = this.controller.signal;

  componentWillUnmount() {
    this.controller.abort();
  }

  componentDidMount() {
    const signal = this.signal;
    this.props.favs.forEach(async id => {
      try {
        const movie = await trackPromise(getMovie({ id, signal }));

        this.setState(state => {
          const moviesArray = state.movies.concat(movie);
          return {
            movies: moviesArray,
            errorMessage: ""
          };
        });
      } catch (error) {
        this.setState({ errorMessage: error.message });
      }
    });
  }

  render() {
    const { favs, handleFavButtonClicked } = this.props;
    const { movies, errorMessage } = this.state;
    return (
      <Fragment>
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        <MovieGrid
          favs={favs}
          handleFavButtonClicked={handleFavButtonClicked}
          movies={movies}
        />
      </Fragment>
    );
  }
}

export default Favspage;
