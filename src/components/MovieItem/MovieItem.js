import React from "react";
import { Link } from "react-router-dom";

import "./MovieItem.sass";

const MovieItem = ({ favs, handleFavButtonClicked, id, title, poster }) => (
  <div className="movie-item">
    <div className="img-wrapper">
      {poster === "N/A" ? (
        <span className="no-img">Image not found</span>
      ) : (
        <img className="img" src={`${poster}`} alt={title} />
      )}
    </div>
    <div className="btns-group">
      <Link to={`/movie/${id}`} className="info-btn">
        <span
          aria-label={`More information about ${title}`}
          className="fas fa-info"
        ></span>
      </Link>
      <button
        aria-label="Add to favourites"
        className="fav-btn"
        value={id}
        onClick={handleFavButtonClicked}
      >
        {favs.includes(id) ? (
          <span aira-hidden="true" className="fas fa-heart"></span>
        ) : (
          <span aira-hidden="true" className="far fa-heart"></span>
        )}
      </button>
    </div>
  </div>
);

export default MovieItem;
