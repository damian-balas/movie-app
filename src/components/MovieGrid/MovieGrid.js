import React from "react";

import MovieItem from "../MovieItem/MovieItem";

import "./MovieGrid.sass";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

const MovieGrid = (props) => (
      <div className="movie-grid">
        {props.movies
          ? props.movies.map(({ imdbID, Title, Poster }) => (
              <MovieItem
                key={imdbID}
                id={imdbID}
                title={Title}
                poster={Poster}
                favs={props.favs}
                handleFavButtonClicked={props.handleFavButtonClicked}
              />
            ))
          : null}
        <LoadingIndicator off={props.loadingIndicatorOff}/>
      </div>
    );
export default MovieGrid;
