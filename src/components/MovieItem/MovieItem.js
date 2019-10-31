import React from 'react'
import { Link } from 'react-router-dom'

import './MovieItem.sass'

const MovieItem = ({favs, handleFavButttonClicked, id, Title, Poster }) => (
  <div className="movie-item">
    <div className="img-wrapper">
      <img className='img' src={`${Poster}`} alt={`${Title} - Poster`}/>
    </div>
    <div className="btns-group">
      <Link to={`/movie/${id}`} className='info-btn'>
       <span aria-label={`More information about ${Title}`} className="fas fa-info"></span>
      </Link>
      <button aria-label="Add to favourites" className='fav-btn' value={id} onClick={handleFavButttonClicked}>{favs.includes(id) ? <span aira-hidden='true' className="fas fa-heart"></span> : <span aira-hidden='true' className="far fa-heart"></span>}</button>
    </div>
  </div>
)

export default MovieItem