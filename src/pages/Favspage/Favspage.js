import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";

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
    this.props.favs.forEach(id => {
      trackPromise(
        fetch(`https://omdbapi.com/?apikey=251e77f3&i=${id}`, { signal })
          .then(response => response.json())
          .then(data =>
            this.setState(state => {
              const moviesArray = state.movies.concat(data);
              return {
                movies: moviesArray
              };
            })
          )
      );
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
