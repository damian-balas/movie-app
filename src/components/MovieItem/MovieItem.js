import React from "react";
import { Link } from "react-router-dom";

import FavBtn from '../FavBtn'

import "./MovieItem.sass";

const MovieItem = ({ isFav, handleFavButtonClicked, id, title, poster }) => (
  <div className="movie-item">
    <div className="img-wrapper">
      {poster === "N/A" ? (
        <span className="no-img">Image not found</span>
      ) : (
        <img className="img" src={poster} alt={title} />
      )}
    </div>
    <div className="btns-group">
      <Link to={`/movie/${id}`} className="info-btn">
        <span
          aria-label={`More information about ${title}`}
          className="fas fa-info"
        ></span>
      </Link>
      <FavBtn 
        isFav={isFav}
        handleFavButtonClicked={handleFavButtonClicked}
        id={id}
      />
    </div>
  </div>
);

export default MovieItem;
