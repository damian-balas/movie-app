import React from "react";

import MovieItem from "../MovieItem/";

import "./MovieGrid.sass";
import LoadingIndicator from "../../components/LoadingIndicator";

const MovieGrid = ({
  movies,
  handleFavButtonClicked,
  loadingIndicatorOff,
  favs
}) => (
  <div className="movie-grid">
    {movies.map(({ imdbID, Title, Poster }) => (
      <MovieItem
        key={imdbID}
        id={imdbID}
        title={Title}
        poster={Poster}
        isFav={favs.includes(imdbID)}
        handleFavButtonClicked={handleFavButtonClicked}
      />
    ))}
    <LoadingIndicator off={loadingIndicatorOff} />
  </div>
);

export default MovieGrid;
