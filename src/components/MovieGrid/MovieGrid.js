import React from "react";

import MovieItem from "../MovieItem/";

import "./MovieGrid.sass";
import LoadingIndicator from "../../components/LoadingIndicator";

const MovieGrid = props => {
  const { movies, handleFavButtonClicked, loadingIndicatorOff, favs } = props;

  return (
    <div className="movie-grid">
      {movies
        ? movies.map(({ imdbID, Title, Poster }) => (
            <MovieItem
              key={imdbID}
              id={imdbID}
              title={Title}
              poster={Poster}
              isFav={favs.includes(imdbID)}
              handleFavButtonClicked={handleFavButtonClicked}
            />
          ))
        : null}
      <LoadingIndicator off={loadingIndicatorOff} />
    </div>
  );
};

export default MovieGrid;
