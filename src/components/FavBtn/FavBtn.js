import React from "react";

import './FavBtn.sass'

const FavBtn = ({id, isFav, handleFavButtonClicked}) => {
  return (
    <button
      aria-label="Add to favourites"
      className="fav-btn"
      onClick={() => handleFavButtonClicked(id, isFav)}
      type="button"
    >
      <span
        aria-hidden="true"
        className={`${isFav ? "fas" : "far"} fa-heart`}
      ></span>
    </button>
  );
};

export default FavBtn;
