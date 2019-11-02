import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";

import getMovie from "../../api/getMovie";

import MovieGrid from "../../components/MovieGrid";

class Favspage extends Component {
  state = {
    movies: []
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
        const movie = await trackPromise(getMovie(id, signal));

        this.setState(state => {
          const moviesArray = state.movies.concat(movie);
          return {
            movies: moviesArray
          };
        });
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  render() {
    const { favs, handleFavButtonClicked } = this.props;
    const { movies } = this.state;
    return (
      <Fragment>
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
