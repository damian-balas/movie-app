import React from "react";

import './FavBtn.sass'

const FavBtn = props => {
  const {id, isFav, handleFavButtonClicked} = props
  return (
    <button
      aria-label="Add to favourites"
      className="fav-btn"
      value={id}
      onClick={handleFavButtonClicked}
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
